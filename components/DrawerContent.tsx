/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC, memo } from "react";
import { CATEGORY_BASE_PATH, DRAWER_ID } from "../constants";
import { IoClose } from "react-icons/io5";
import { Category } from "@prisma/client";
import Logo from "./Logo";

const DrawerContent: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <div className="menu w-80 bg-base-100 text-base-content">
      <div className="bg-slate-50/40 border-b border-b-slate-200 flex items-center h-14 px-3">
        <label
          aria-label="close drawer"
          htmlFor={DRAWER_ID}
          role="button"
          className="btn btn-ghost btn-sm btn-square text-slate-400 ml-2"
        >
          <IoClose size={24} />
        </label>
        <h2 className="text-4xl">
          <Logo />
        </h2>
      </div>
      <ul className="pt-3">
        {categories.map((c) => (
          <li key={c.id}>
            <Link href={`${CATEGORY_BASE_PATH}/${c.path}`}>
              <a className="py-1 active:bg-gray-200">
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <h2 className="text-sm" style={{ color: c.color }}>
                  {c.title}
                </h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(DrawerContent);
