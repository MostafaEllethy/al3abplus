import { Category } from "@prisma/client";
import { FC, ReactNode } from "react";
import CategoriesSideNav from "../components/CategoriesSideNav";
import MainLayout from "../layouts/MainLayout";

const SideCategoriesLayout: FC<{
  categories: Category[];
  children: ReactNode;
}> = ({ categories, children }) => {
  return (
    <MainLayout
      categories={categories}
      hideCategories={true}
      className="bg-slate-50"
    >
      <div className="border-t px-3 sm:px-5 md:px-10 lg:px-[12.5%]">
        <div className="flex py-3 gap-5">
          <CategoriesSideNav categories={categories} />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SideCategoriesLayout;
