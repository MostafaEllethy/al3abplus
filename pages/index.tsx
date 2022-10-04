import { Category } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import { BRAND_NAME } from "../constants";
import Layout from "../layouts/MainLayout";
import { fetchCategories } from "../lib/fetch-categories";
import { IoFlameSharp, IoFlash } from "react-icons/io5";
import { fetchLatestGames } from "../lib/fetch-latest-games";
import { GameBasicInfo } from "../interfaces";
import GameLink from "../components/GameLink";
import Spinner from "../components/Spinner";
import { useCallback, useEffect, useState } from "react";
import { fetchFeaturedGames } from "../lib/fetch-featured-games";
import { DetectMobileContext } from "../DetectMobileContext";

const Home: NextPage<{
  categories: Category[];
  games: GameBasicInfo[];
  featuredGames: GameBasicInfo[];
}> = ({ categories, games, featuredGames }) => {
  const [latestGames, setLatestGames] = useState<GameBasicInfo[]>(games);
  const [loading, setLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | undefined>();
  const loadMore = useCallback(() => {
    setLoading(true);
    fetch(
      `/api/fetch-latest-games?cursor=${latestGames[latestGames.length - 1].id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setLatestGames((prev) => [...prev, ...data]);
        } else {
          setNoMore(true);
        }
        setLoading(false);
      });
  }, [latestGames]);

  useEffect(() => {
    setIsMobile(navigator.userAgentData?.mobile ?? false);
  }, []);

  return (
    <>
      <Head>
        <title>{`${BRAND_NAME} ألعاب مجانية عبر الانترنت بدون تحميل`}</title>
        <meta
          name="description"
          content="العاب+ هو موقع العاب عربي يحتوي على مجموعة كبيرة من افضل الالعاب المجانية الجديدة والمتنوعة اونلاين بدون تحميل. كما يحتوى على العاب فلاش والعاب بنات والمزيد."
        />
      </Head>
      <Layout categories={categories} logoH1={true}>
        <DetectMobileContext.Provider value={isMobile}>
          <div
            className="text-center max-w-6xl mx-auto"
            style={{ visibility: isMobile === undefined ? "hidden" : "unset" }}
          >
            <section>
              <div className="divider pb-7 pt-4">
                <h2 className="text-2xl font-bold text-red-500">
                  <IoFlameSharp className="inline-block" size={32} /> أشهر
                  الألعاب
                </h2>
              </div>
              <div
                className="grid gap-x-2 gap-y-3 mb-5
            px-2 sm:px-3
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              >
                {featuredGames.map((g, i) => (
                  <GameLink key={g.path} gameInfo={g} index={i} />
                ))}
              </div>
            </section>

            <section className="mb-7">
              <div className="divider py-7">
                <h2 className="text-2xl font-bold text-sky-500">
                  <IoFlash className="inline-block" size={32} /> أحدث الألعاب
                </h2>
              </div>
              <div
                className="grid gap-x-2 gap-y-3 mb-5
            px-2 sm:px-3
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              >
                {latestGames.map((g, i) => (
                  <GameLink key={g.path} gameInfo={g} index={i} />
                ))}
              </div>
              {!noMore && (
                <button
                  className="btn border-sky-500 bg-sky-500 hover:bg-sky-400 hover:border-sky-400 text-white w-36 mt-5"
                  onClick={loadMore}
                >
                  {loading ? (
                    <Spinner className="text-white" />
                  ) : (
                    <span>عرض المزيد</span>
                  )}
                </button>
              )}
            </section>
          </div>
        </DetectMobileContext.Provider>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      games: await fetchLatestGames(),
      featuredGames: await fetchFeaturedGames(),
      categories: await fetchCategories(),
    },
    revalidate: 900,
  };
}

export default Home;
