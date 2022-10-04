import { Category } from "@prisma/client";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import CategoriesNav from "../components/CategoriesNav";
import { DRAWER_ID } from "../constants";

const Header = dynamic(() => import("../components/Header"));
const DrawerContent = dynamic(() => import("../components/DrawerContent"));
const Footer = dynamic(() => import("../components/Footer"));

const MainLayout: FC<{
  children: ReactNode;
  categories: Category[];
  hideCategories?: boolean;
  className?: string;
  logoH1?: boolean;
}> = ({
  children,
  categories,
  hideCategories = false,
  className,
  logoH1 = false,
}) => {
  return (
    <>
      <div className="drawer">
        <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
        <div className={`drawer-content ${className}`}>
          <Header logoH1={logoH1} />
          <CategoriesNav categories={categories} hidden={hideCategories} />
          <main className="min-h-[calc(100vh-128px)]">{children}</main>
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor={DRAWER_ID} className="drawer-overlay"></label>
          <DrawerContent categories={categories} />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
