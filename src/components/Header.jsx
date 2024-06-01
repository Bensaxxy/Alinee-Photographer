import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/header/logo.svg";
import { CursorContext } from "../context/CursorContext";
import MobileNav from "./MobileNav";
import Social from "./Social";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex items-center">
      <div className=" flex flex-col lg:flex-row lg:items-center justify-between w-full">
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
        >
          <img className="max-w-[130px] lg:max-w-[200px]" src={logo} />
        </Link>

        {/**nav - intially hidden - show on destop mode */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className=" hidden lg:flex gap-x-12 font-semibold"
        >
          <Link
            className=" text-[#696c6d] hover:text-primary transition"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className=" text-[#696c6d] hover:text-primary transition"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className=" text-[#696c6d] hover:text-primary transition"
            to={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className=" text-[#696c6d] hover:text-primary transition"
            to={"/contacts"}
          >
            Contacts
          </Link>
        </nav>
      </div>
      {/**Socials */}
      <Social />
      {/**mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
