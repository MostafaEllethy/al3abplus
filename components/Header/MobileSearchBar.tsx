import { FC, useEffect, useRef } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

const MobileSearchBar: FC<{
  toggleSearch: () => void;
  visibility: boolean;
}> = ({ toggleSearch, visibility }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [visibility]);
  return (
    <form method="get" action="/search" className="grow">
      <nav className="flex items-center grow">
        <input
          ref={inputRef}
          name="q"
          type="search"
          placeholder="بحث..."
          className="text-slate-50 input w-full text-lg focus:outline-none bg-transparent"
        />
        <button
          aria-label="search button"
          className="mx-2 text-slate-50"
          type="submit"
        >
          <IoSearch size={28} />
        </button>
        <button
          aria-label="close button"
          className="btn btn-sm btn-square btn-ghost text-slate-100"
          onClick={toggleSearch}
        >
          <IoClose size={24} />
        </button>
      </nav>
    </form>
  );
};

export default MobileSearchBar;
