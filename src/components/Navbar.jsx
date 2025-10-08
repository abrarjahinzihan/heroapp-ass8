import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import "../App.css";
import Container from "./Container";

const Navbar = () => {
    return (
        <div className=" bg-base-100 shadow-sm">
        <Container>
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {" "}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <NavLink to="/">
                    <li className="mr-4">Home</li>
                    </NavLink>
                    <NavLink to="/apps">
                    <li className="mr-4">Apps</li>
                    </NavLink>
                    <NavLink to="/installation">
                    <li className="mr-4">Installation</li>
                    </NavLink>
                </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                <img className="w-[50px] hidden md:block" src={logoImg} alt="" />
                <h1 className="font-bold text-xl ">HERO.IO</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink to="/">
                    <li className="mr-4 font-semibold text-[17px]">Home</li>
                </NavLink>
                <NavLink to="/apps">
                    <li className="mr-4 font-semibold text-[17px]">Apps</li>
                </NavLink>
                <NavLink to="/installation">
                    <li className="mr-4 font-semibold text-[17px]">Installation</li>
                </NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-2 px-4 rounded-xl text-white">
                <i className="fa-brands fa-github"></i>
                <a
                    href="https://github.com/abrarjahinzihan"
                    target="_blank"
                    className="ml-1 text-white"
                >
                    Contribute
                </a>
                </div>
            </div>
            </div>
        </Container>
        </div>
    );
};

export default Navbar;