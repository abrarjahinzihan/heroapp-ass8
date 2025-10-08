import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div>
            <img className="mx-auto" src={errorImg} alt="" />
            <div className="space-y-2 flex flex-col justify-center items-center mt-5">
                <h1 className="text-2xl font-semibold">Oops, page Not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link to="/">
                <button className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-2 px-4 rounded-md text-white">
                    Go back
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;