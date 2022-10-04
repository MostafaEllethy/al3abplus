import { Category } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BRAND_NAME } from "../constants";
import { fetchCategories } from "../lib/fetch-categories";
import { search } from "../lib/search";
import { GameBasicInfo } from "../interfaces";
import GameLink from "../components/GameLink";
import SideCategoriesLayout from "../layouts/SideCategoriesLayout";

const Search: NextPage<{ categories: Category[]; games: GameBasicInfo[] }> = ({
  categories,
  games,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState<string | undefined>(undefined);
  useEffect(() => {
    setQuery(router.query.q as string);
  }, [router.query.q]);
  return (
    <SideCategoriesLayout categories={categories}>
      <Head>
        <title>{`نتائج البحث - ${BRAND_NAME} ألعاب مجانية عبر الانترنت`}</title>
        <meta
          name="description"
          content="يمكنك البحث على موقع العاب+ عن العابك المفضلة. يحتوي الموقع على مجموعة كبيرة من افضل الالعاب المجانية اونلاين بدون تحميل."
        />
      </Head>
      <section className="card w-full bg-base-100 shadow  rounded-md mx-auto">
        <div className="card-body p-3 gap-0">
          <form className="flex gap-3 justify-center">
            <input
              defaultValue={query}
              name="q"
              type="search"
              placeholder="بحث..."
              className="input input-bordered w-full rounded-sm h-10"
            />
            <input
              type="submit"
              value="بحث"
              className="btn px-5 rounded-sm h-10 min-h-[40px]"
            />
          </form>
        </div>
      </section>
      {games !== null && (
        <section className="p-5 sm:px-0">
          {games.length > 0 ? (
            <>
              <h2 className="text-xl">نتائج البحث - &quot;{query}&quot;</h2>
              <div
                className="grid gap-x-2 gap-y-3 py-6
                 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              >
                {games.map((g, i) => (
                  <GameLink key={g.path} gameInfo={g} index={i} />
                ))}
              </div>
            </>
          ) : (
            <h3 className="text-2xl text-amber-500 mt-7 text-center">
              لم يتم العثور على نتائج - &quot;{query}&quot;
            </h3>
          )}
        </section>
      )}
    </SideCategoriesLayout>
  );
};

export async function getServerSideProps(context: any) {
  let games: GameBasicInfo[] | null = null;
  const query = context.query.q as string;
  if (query) {
    games = await search(query);
  }
  return {
    props: {
      games: games,
      categories: await fetchCategories(),
    },
  };
}

export default Search;
