import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/share/Button";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" max-w-7xl mx-auto bg-white shadow-lg rounded-md py-7 px-2 my-7 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} className="h-12 mx-7" />
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <Link to={"/"}>خانه</Link>
              </li>
              <li>
                <Link to={"/services"}>خدمات </Link>
              </li>
              <li>
                <Link to={"/projects"}>پروژه ها</Link>
              </li>
              <li>
                <Link to={"/about-us"}>درباره ما </Link>
              </li>
              <li>
                <Link to={"/contact-us"}>تماس ما </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button>مشاوره رایگان</Button>
        </div>
        <div onClick={() => setOpen(true)} className="block md:hidden">
          <TiThMenu className="text-2xl ml-8" />
        </div>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="fixed z-50 border-2 shadow-xl left-0 top-0 bg-white min-h-screen w-[180px]">
          <div onClick={() => setOpen(false)} className="absolute left-5 top-5">
            <FaTimes />
          </div>
          <nav className="mt-20">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link to={"/"}>خانه</Link>
              </li>
              <li>
                <Link to={"/services"}>خدمات </Link>
              </li>
              <li>
                <Link to={"/projects"}>پروژه ها</Link>
              </li>
              <li>
                <Link to={"/about-us"}>درباره ما </Link>
              </li>
              <li>
                <Link to={"/contact-us"}>تماس ما </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
