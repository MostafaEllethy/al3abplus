import { FC, memo } from "react";
import { IoSearch } from "react-icons/io5";

const SearchToggler: FC<{ toggleSearch: () => void }> = ({ toggleSearch }) => (
  <div className="flex-none sm:hidden">
    <button
      className="btn btn-square btn-ghost text-slate-100"
      aria-label="search button"
      onClick={toggleSearch}
    >
      <IoSearch size={28} />
    </button>
  </div>
);

export default memo(SearchToggler);
