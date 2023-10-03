import React from "react";
import NavbarItem from "./navbarItem";
import SearchBar from "../searchBar/searchBar";
import CustomButton from "../utils/cutomButton/customButton";

function navbar() {
  return (
    <div className="w-full relative  flex flex-row items-center p-4 text-black border-b border-gray-300 justify-around">
      <div className="flex flex-row mr-4">
        <NavbarItem text="Shops" />
        <NavbarItem text="Offers" />
        <NavbarItem text="FAQ" />
        <NavbarItem text="Contact" />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-row">
        <CustomButton text="Become a Seller" />
        <CustomButton text="Join" />
      </div>
    </div>
  );
}

export default navbar;
