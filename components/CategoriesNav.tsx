/* eslint-disable @next/next/no-img-element */
import { Category } from "@prisma/client";
import { FC, memo } from "react";
import Link from "next/link";
import { CATEGORY_BASE_PATH } from "../constants";

const CategoriesNav: FC<{ categories: Category[]; hidden?: boolean }> = ({
  categories,
  hidden = false,
}) => {
  return hidden ? null : (
    <nav
      className={`grid mx-auto py-3
grid-cols-3 sm:grid-cols-6 lg:grid-cols-6
px-1 sm:px-5 md:px-10 lg:px-[12.5%] bg-red`}
    >
      {categories.map((category) => (
        <Link
          href={`${CATEGORY_BASE_PATH}/${category.path}`}
          key={category.path}
        >
          <a className="text-center border hover:bg-slate-100 py-2 z-10">
            <img
              className="relative mx-auto w-12 h-12 lg:w-14 lg:h-14"
              loading="lazy"
              src={category.imageUrl}
              alt={category.title}
            />
            <h2
              className={`text-sm sm:text-xs lg:text-sm sm:mt-1`}
              style={{ color: category.color }}
            >
              {category.title}
            </h2>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default memo(CategoriesNav);
