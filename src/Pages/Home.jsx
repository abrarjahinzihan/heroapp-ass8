import React from "react";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container";
import AppCard from "./AppCard";
import { Link } from "react-router";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

const Home = () => {
    const data = useAppData();
    const { appData, loading } = data;
    const sliceData = appData.slice(0, 8);

    return (
        <>
        {loading ? (
            <Loading></Loading>
        ) : (
            <div>
                <Banner></Banner>
                <div className="max-w-7xl mx-auto p-10">
                    <div className="my-10">
                        <h1 className="font-bold text-5xl text-center text-[#001931]">Trending Apps</h1>
                        <p className="text-center my-4 text-sm sm:text-base md:text-[18px] text-gray-400 mt-4 md:mt-4">
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
                        {sliceData.map((singleData) => (
                            <AppCard key={singleData.id} singleData={singleData}></AppCard>
                        ))}
                    </div>
                    <Link to="/apps" className="flex justify-center">
                    <p className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-2 px-8 mt-8 rounded-xl text-white w-fit ">
                        Show All
                    </p>
                    </Link>
                </div>
            </div>
        )}
        </>
    );
};

export default Home;