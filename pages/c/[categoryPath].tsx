/* eslint-disable @next/next/no-img-element */
import { Category, Game } from "@prisma/client";
import { NextPage } from "next";
import { fetchCategories } from "../../lib/fetch-categories";
import { fetchCategory } from "../../lib/fetch-category";
import GameLink from "../../components/GameLink";
import SideCategoriesLayout from "../../layouts/SideCategoriesLayout";
import { BRAND_NAME, INTRO } from "../../constants";
import Head from "next/head";
import { GameBasicInfo } from "../../interfaces";
import { useCallback, useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const CategoryPage: NextPage<{
  key: number;
  categories: Category[];
  category: Category & { games: GameBasicInfo[] };
}> = ({ categories, category }) => {
  const [games, setGames] = useState<GameBasicInfo[]>(category.games);
  const [loading, setLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);

  useEffect(() => {
    const drawer = document.getElementById("Drawer") as HTMLInputElement;
    drawer.checked = false;
    document.querySelector(".drawer-content")?.scrollTo({ top: 0 });
    setLoading(false);
    setNoMore(false);
    setGames(category.games);
  }, [category]);

  const loadMore = useCallback(() => {
    setLoading(true);
    fetch(
      `/api/fetch-category-games?path=${category.path}&cursor=${
        games[games.length - 1].id
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.games.length > 0) {
          setGames((prev) => [...prev, ...data.games]);
        } else {
          setNoMore(true);
        }
        setLoading(false);
      });
  }, [games, category.path]);

  return (
    <SideCategoriesLayout categories={categories}>
      <Head>
        <title>
          {` ${category.title} - ${BRAND_NAME} ألعاب مجانية عبر الانترنت بدون تحميل`}
        </title>
        <meta name="description" content={`${category.title} - ${INTRO}`} />
      </Head>
      <section className="h-[5.5rem] flex justify-center items-center bg-white p-2 rounded-lg border">
        <h1
          className="font-bold text-2xl flex items-center justify-center gap-3 z-10"
          style={{ color: category.color }}
        >
          <span className="w-12 h-12">
            <img
              title={category.title}
              loading="lazy"
              src={category.imageUrl}
              alt={category.title}
              width={96}
              height={96}
            />
          </span>
          {category.title}
        </h1>
      </section>

      <section
        className="my-5 grid 
        gap-x-2
        gap-y-3
        grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {games.map((g, i) => (
          <GameLink key={g.path} gameInfo={g as Game} index={i} />
        ))}
      </section>
      {!noMore && (
        <div className="text-center mb-5">
          <button
            className="btn border-purple-700 bg-purple-700 hover:bg-purple-600 hover:border-purple-600 text-white w-36"
            onClick={loadMore}
          >
            {loading ? (
              <Spinner className="text-white" />
            ) : (
              <span>عرض المزيد</span>
            )}
          </button>
        </div>
      )}
    </SideCategoriesLayout>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }: any) {
  return {
    props: {
      category: await fetchCategory(params.categoryPath),
      categories: await fetchCategories(),
    },
    revalidate: 900,
  };
}

export async function getStaticPaths() {
  const categories = await fetchCategories();
  return {
    paths: categories.map((c) => ({
      params: { categoryPath: c.path },
    })),
    fallback: "blocking",
  };
}
