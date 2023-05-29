import React from "react";
import SecondaryItems from "./components/SecondaryItems";
import MainItems from "./components/MainItems";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:items-center border-b border-[#091e4224] px-4">
      <MainItems />
      <SecondaryItems />
    </div>
  );
};

export default Navbar;
