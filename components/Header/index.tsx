import Link from "next/link";
import { FC, memo, useCallback, useState } from "react";
import Logo from "../Logo";
import SearchToggler from "./SearchToggler";
import MobileSearchBar from "./MobileSearchBar";
import SearchBar from "./SearchBar";
import DrawerToggler from "./DrawerToggler";

const Header: FC<{ logoH1?: boolean }> = ({ logoH1 = false }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchVisible((prev) => !prev);
  }, []);

  const logo = useCallback(() => {
    const component = <Logo />;
    if (logoH1) return <h1>{component}</h1>;
    return component;
  }, [logoH1]);

  return (
    <header className="shadow">
      <div className="navbar md:px-10 lg:px-[12.5%] sm:justify-between bg-slate-600">
        {searchVisible ? (
          <MobileSearchBar
            toggleSearch={toggleSearch}
            visibility={searchVisible}
          />
        ) : (
          <>
            <DrawerToggler />
            <div className="flex-1 md:flex-none">
              <h1>
                <Link href="/">
                  <a
                    title="العاب+ موقع العاب عربي يحتوي على مجموعة كبيرة من افضل الالعاب المجانية الجديدة والمتنوعة اونلاين بدون تحميل"
                    className="text-[3rem] relative top-1 leading-[0]"
                  >
                    {logo()}
                  </a>
                </Link>
              </h1>
            </div>
            <SearchBar />
            <SearchToggler toggleSearch={toggleSearch} />
          </>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
