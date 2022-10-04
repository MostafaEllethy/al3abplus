import { FC } from "react";
import { IoMenu } from "react-icons/io5";
import { DRAWER_ID } from "../../constants";

const DrawerToggler: FC = () => (
  <div className="flex-none md:hidden ml-2">
    <label
      htmlFor={DRAWER_ID}
      className="btn btn-square btn-ghost text-slate-100"
    >
      <IoMenu size={28} />
    </label>
  </div>
);

export default DrawerToggler;
