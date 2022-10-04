import { FC } from "react";
import { FcSearch } from "react-icons/fc";

const SearchBar: FC = () => {
  return (
    <form
      method="get"
      action="/search"
      className="relative hidden sm:inline-flex"
    >
      <input
        name="q"
        type="search"
        placeholder="بحث"
        className="input input-bordered w-full max-w-[17.5rem] rounded-sm pl-9 h-10"
      />
      <button
        aria-label="search button"
        className="absolute left-0 h-8 px-2 opacity-60 hover:opacity-100"
        type="submit"
      >
        <FcSearch size={22} />
      </button>
    </form>
  );
};

export default SearchBar;
