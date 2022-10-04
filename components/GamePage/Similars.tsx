import { FC, memo, useEffect, useState } from "react";
import { IoGameController } from "react-icons/io5";
import { GameDetails } from "../../interfaces";
import GameLink from "../GameLink";
import Spinner from "../Spinner";

const Similars: FC<{ categoryId: number; gameId: number }> = ({
  categoryId,
  gameId,
}) => {
  const [games, setGames] = useState<GameDetails[] | undefined>();
  useEffect(() => {
    fetch(`/api/similar-games?categoryId=${categoryId}&gameId=${gameId}`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, [categoryId, gameId]);
  return (
    <section className="card w-full bg-base-100 shadow-sm border mt-4 rounded mb-5">
      <div className="card-body py-5 px-2 sm:px-5 items-center">
        <h2 className="flex items-center justify-center text-[1rem] font-bold text-purple-800 gap-1 mb-3">
          <IoGameController size={24} /> العاب مشابهة
        </h2>
        {games === undefined ? (
          <Spinner />
        ) : (
          <div
            className="w-full grid gap-x-2 gap-y-3
          grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
          >
            {games.map((g) => (
              <GameLink key={g.path} gameInfo={g as GameDetails} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Similars);
