import Link from "next/link";
import { FC, memo, RefObject, useCallback } from "react";
import { IoExpandOutline } from "react-icons/io5";
import { GameDetails } from "../../interfaces";
import Spinner from "../Spinner";

const GameActions: FC<{
  url: string;
  game: GameDetails;
  gameContainerRef: RefObject<HTMLIFrameElement>;
}> = ({ url, game, gameContainerRef }) => {
  const setGameFullScreen = useCallback(async () => {
    const iframe = gameContainerRef.current as HTMLIFrameElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
    if (iframe) {
      if (iframe.requestFullscreen) {
        await iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        await iframe.webkitRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        await iframe.mozRequestFullScreen();
      } else if (iframe.msRequestFullscreen) {
        await iframe.msRequestFullscreen();
      }
    }
  }, [gameContainerRef]);

  return (
    <nav className="mb-3 flex items-center flex-wrap gap-y-2 gap-x-2 sm:gap-y-0">
      <button
        className="btn rounded btn-sm flex items-center gap-1 bg-green-500 border-green-500 hover:bg-green-500 hover:border-green-500 hover:bg-opacity-90 w-full sm:flex-1"
        onClick={setGameFullScreen}
      >
        <IoExpandOutline size={20} />
        <span className="text-xs">شاشة كاملة</span>
      </button>
      {url ? (
        <>
          {/* <div className="flex items-center gap-2 w-full"> */}
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <a
              target="_blank"
              className="btn rounded btn-sm bg-[#4267B2] border-[#4267B2] hover:border-[#4267B2] hover:bg-[#4267B2] hover:bg-opacity-90 text-xs flex-1"
            >
              شارك على فيسبوك
            </a>
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=${
              "لعبة " + game.title + "%0A"
            }+${url}`}
          >
            <a
              target="_blank"
              className="btn rounded btn-sm bg-[#00acee] border-[#00acee] hover:border-[#00acee] hover:bg-[#00acee] hover:bg-opacity-90 text-xs w-50 flex-1"
            >
              شارك على تويتر
            </a>
          </Link>
          {/* <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
              <a target="_blank" className="text-[#4267B2] text-sm font-bold">
                فيس بوك
                <IoLogoFacebook size={26} color="#4267B2" />
              </a>
            </Link>
            -
            <Link
              href={`https://twitter.com/intent/tweet?text=${
                "لعبة " + game.title + "%0A"
              }+${url}`}
            >
              <a target="_blank" className="text-[#00acee] text-sm font-bold">
                تويتر
                <IoLogoTwitter size={26} color="#00acee" />
              </a>
            </Link> */}
          {/* </div> */}
        </>
      ) : (
        <Spinner className="text-slate-600 h-5 w-5" />
      )}

      {/* <button
        className="btn rounded btn-sm min-h-[2rem] h-[2rem] flex items-center gap-1 bg-sky-500 border-sky-500 hover:bg-sky-400 hover:border-sky-400"
        onClick={setGameFullScreen}
      >
        <IoExpandOutline size={20} />
        <span className="text-xs">شاشة كاملة</span>
      </button> */}
    </nav>
  );
};

export default memo(GameActions);
