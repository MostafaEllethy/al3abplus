import { FC, memo } from "react";

const Logo: FC = () => (
  <span className="leading-none font-lalezar">
    <span className="text-red-400">أ</span>
    <span className="text-amber-400">ل</span>
    <span className="text-emerald-400">ع</span>
    <span className="text-sky-400">ا</span>
    <span className="text-purple-400 ml-1">ب</span>
    <span className="text-red-400">+</span>
  </span>
);

export default memo(Logo);
