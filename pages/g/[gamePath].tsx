import { Category } from "@prisma/client";
import { NextPage } from "next";
import SideCategoriesLayout from "../../layouts/SideCategoriesLayout";
import { fetchCategories } from "../../lib/fetch-categories";
import { fetchGame } from "../../lib/fetch-game";
import { fetchGames } from "../../lib/fetch-games";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { BRAND_NAME } from "../../constants";
import Comments from "../../components/GamePage/Comments";
import Details from "../../components/GamePage/Details";
import GameActions from "../../components/GamePage/GameActions";
import { GameDetails } from "../../interfaces";
import Similars from "../../components/GamePage/Similars";
import { useRouter } from "next/router";

const GamePage: NextPage<{
  game: GameDetails;
  categories: Category[];
}> = ({ game, categories }) => {
  const router = useRouter();

  const [url, setUrl] = useState<string | null>();
  const gameContainerRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, [game]);

  router.events?.on("routeChangeStart", () => {
    document.querySelector(".drawer-content")?.scrollTo({ top: 0 });
  });

  return (
    <SideCategoriesLayout categories={categories}>
      <Head>
        <title>
          {`  ${game.title} - ${game.category.title} - ${BRAND_NAME} ألعاب مجانية عبر الانترنت`}
        </title>
        <meta
          name="description"
          content={`العب ${game.title} مجانا اونلاين بدون تحميل. يحتوي موقع العاب+ على مجموعة كبيرة من الالعاب الاونلاين المجانية عبر الانترنت بدون تحميل. `}
        />
      </Head>

      <div className="max-w-3xl mx-auto relative">
        <h1 className="font-bold text-[1.5rem] text-center z-10 text-slate-600 mb-7 mt-2">
          {game.title}
        </h1>
        <GameActions
          url={url as string}
          game={game}
          gameContainerRef={gameContainerRef}
        />

        <iframe
          title={game.title}
          ref={gameContainerRef}
          src={game.iFrameLink}
          className="min-h-[32.5rem] bg-gray-900 w-full h-full"
          scrolling="no"
          allowFullScreen
        ></iframe>

        <Details game={game} />
        <Comments url={url as string} />
        <Similars categoryId={game.category.id} gameId={game.id} />
      </div>
    </SideCategoriesLayout>
  );
};

export default GamePage;

export async function getStaticProps({ params }: any) {
  return {
    props: {
      game: await fetchGame(params.gamePath),
      categories: await fetchCategories(),
    },
    revalidate: 900,
  };
}

export async function getStaticPaths() {
  const games = await fetchGames();
  return {
    paths: games.map((g) => ({
      params: { gamePath: g.path },
    })),
    fallback: "blocking",
  };
}
