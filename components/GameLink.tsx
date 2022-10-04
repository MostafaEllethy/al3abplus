/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC, memo, useContext } from "react";
import { GameBasicInfo } from "../interfaces";
import { DetectMobileContext } from "../DetectMobileContext";

const GameLink: FC<{ gameInfo: GameBasicInfo; index?: number }> = ({
  gameInfo,
  index,
}) => {
  const isMobile = useContext(DetectMobileContext);
  return isMobile && !gameInfo.mobileReady ? null : (
    <Link href={`/g/${gameInfo.path}`} prefetch={false}>
      <a className="group text-center">
        <div className="avatar w-full pt-[75%]">
          <img
            src={gameInfo.imageUrl}
            alt={gameInfo.title}
            loading={index !== undefined && index < 10 ? "eager" : "lazy"}
            className="absolute top-0 left-0 w-full h-full border rounded-md"
          />
        </div>
        <h2 className="text-sm text-sky-800 group-hover:underline mt-2">
          {gameInfo.title}
        </h2>
      </a>
    </Link>
  );
};

export default memo(GameLink);
