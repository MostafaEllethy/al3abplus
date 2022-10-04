/* eslint-disable @next/next/no-img-element */
import { FC, memo, useCallback, useState } from "react";
import { GameDetails } from "../../interfaces";
import Link from "next/link";
import { CATEGORY_BASE_PATH } from "../../constants";

const Details: FC<{
  game: GameDetails;
}> = ({ game }) => {
  const [liked, setLiked] = useState(false);
  const c = game.category;

  const likeTheGame = useCallback(
    (value: boolean) => {
      setLiked(true);
      const localData = localStorage.getItem("likedGames");
      const likedGames = localData ? JSON.parse(localData) : {};
      const oldValue = likedGames[game.id];
      console.log("Old Value", oldValue);
      fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({ id: game.id, value, oldValue }),
      }).then(() => {
        localStorage.setItem(
          "likedGames",
          JSON.stringify(Object.assign({}, likedGames, { [game.id]: value }))
        );
      });
    },
    [game]
  );

  return (
    <section className="card w-full bg-base-100 shadow-sm border mt-3 rounded">
      <div className="card-body p-3 sm:p-5">
        <h2 className="card-title justify-center text-sky-700 mb-2 text-lg text-center">
          تفاصيل {game.title}
        </h2>
        <div className="flex flex-col">
          <div>
            <div className="avatar float-right ml-3 w-36">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="rounded-sm"
              />
            </div>
            <p className="text-sm">{game.description}</p>
          </div>

          <div className="flex mt-3 flex-col sm:flex-row sm:justify-between gap-y-2 flex-wrap">
            <div className="flex items-center gap-1">
              <label className="text-sm">تصنيف اللعبة:</label>
              <Link href={`${CATEGORY_BASE_PATH}/${c.path}`}>
                <a style={{ color: game.category.color }}>
                  <h3 className="text-sm font-bold" style={{ color: c.color }}>
                    {c.title}
                  </h3>
                </a>
              </Link>
            </div>
            {liked ? (
              <span className="text-green-500">تم تقييم اللعبة بنجاح</span>
            ) : (
              <div className="flex items-center gap-3">
                <label className="text-sm">هل اعجبتك {game.title}؟</label>
                <button
                  className="btn btn-sm btn-outline font-lalezar font-normal text-xl btn-success"
                  onClick={() => likeTheGame(true)}
                >
                  نعم
                </button>
                <button
                  className="btn btn-sm btn-outline font-lalezar font-normal text-xl btn-error"
                  onClick={() => likeTheGame(false)}
                >
                  لا
                </button>
              </div>
            )}
          </div>
          {/* <div className="border-t pt-4 mt-5 flex justify-center">
            <button className="btn btn-secondary btn-xs flex items-center gap-1 min-h-[2rem] px-3">
              <span>أضف اللعبة للألعاب المفضلة</span> <FaHeart />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default memo(Details);
