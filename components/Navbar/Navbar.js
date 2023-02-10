import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/logo.png";
import { navTitle } from "../../utils/data";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";
import Image from "next/image";

const Navbar = ({ setIsOpen }) => {
  const [click, setClick] = useState(false);
  const [dropNav, setDropNav] = useState(false);
  const [dropNavProduct, setDropNavProduct] = useState(false);
  const handleClick = () => setClick(!click);
  const router = useRouter();
  return (
    <>
      <nav className="navbarr">
        <div className="navbar-container container">
          <NextLink href="/" className="navbar-logo">
            <Image src={logo} alt="Medical-logo" />
          </NextLink>

          <div
            className="menu-icon"
            onClick={() => {
              handleClick;
              setIsOpen(true);
            }}
          >
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <span className="flex-center">{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => {
              if (item.title === "About Us") {
                return (
                  <li
                    className={!dropNav ? "nav-item" : "nav-item drop-active"}
                    key={index}
                    onMouseEnter={() => setDropNav(true)}
                    onMouseLeave={() => setDropNav(false)}
                  >
                    <NextLink
                      href={item.path}
                      className={"nav-links"}
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      {item.title}{" "}
                      <span className="flex-center arrowDown ">
                        <IoIosArrowDown />
                      </span>
                    </NextLink>

                    {dropNav && <Dropdown dropDownData={item?.subRoutes} />}
                  </li>
                );
              }
              if (item.title === "Products") {
                return (
                  <li
                    className={
                      !dropNavProduct ? "nav-item" : "nav-item drop-active"
                    }
                    key={index}
                    onMouseEnter={() => setDropNavProduct(true)}
                    onMouseLeave={() => setDropNavProduct(false)}
                  >
                    <NextLink
                      href={item.path}
                      className={"nav-links"}
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      {item.title}{" "}
                      <span className="flex-center arrowDown ">
                        <IoIosArrowDown />
                      </span>
                    </NextLink>

                    {dropNavProduct && (
                      <Dropdown dropDownData={item?.subRoutes} />
                    )}
                  </li>
                );
              }
              return (
                <li className={`nav-item `} key={index}>
                  <NextLink
                    href={item.path}
                    className={`nav-links ${
                      router.pathname == item.path ? "active" : ""
                    }`}
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    {item.title}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
