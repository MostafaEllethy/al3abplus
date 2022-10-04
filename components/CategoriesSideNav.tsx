/* eslint-disable @next/next/no-img-element */
import { FC, memo } from "react";
import Link from "next/link";
import { Category } from ".prisma/client";
import { CATEGORY_BASE_PATH } from "../constants";

const CategoriesSideNav: FC<{ categories: Category[] }> = ({ categories }) => (
  <div className="hidden md:block w-60 sm:w-48 min-w-[12rem]">
    <div className="menu w-full bg-slate-50 text-base-content border-x">
      <ul>
        {categories.map((c) => (
          <li key={c.id} className="border-t last:border-b">
            <Link href={`${CATEGORY_BASE_PATH}/${c.path}`}>
              <a className="py-1 active:bg-gray-200">
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  width={28}
                  height={28}
                  loading="lazy"
                />
                <h2 className="text-xs" style={{ color: c.color }}>
                  {c.title}
                </h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default memo(CategoriesSideNav);
