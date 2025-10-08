import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { ToastContainer } from "react-toastify";

const MainLayOut = () => {
    return (
        <div className=" flex flex-col min-h-screen bg-[#f5f7f9]">
        <Navbar></Navbar>

        <div className="flex-1">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
        </div>
    );
};

export default MainLayOut;