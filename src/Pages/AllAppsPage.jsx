import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";
import Loading from "../components/Loading";

const AllAppsPage = () => {
    const { appData, loading } = useAppData();
    const [search, setSearch] = useState("");
    const term = search.trim().toLowerCase();
    const actualData = Array.isArray(appData) ? appData : appData?.apps || [];

    const searchData = term
        ? actualData.filter((d) =>
            (d?.title || "").toLowerCase().includes(term)
        )
        : actualData;

    console.log("searchData:", searchData);

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
                <div className="my-10 px-2 sm:px-0">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-[#001931]">
                        Our All Applications
                    </h1>
                    <p className="text-center my-4 text-[#627382] text-sm sm:text-base md:text-lg">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mb-5 flex-wrap gap-3 px-2 sm:px-0">
                    <h1 className="font-semibold text-xl sm:text-2xl text-[#001931]">
                        ({searchData.length}) Apps Found
                    </h1>
                    <label className="w-full sm:w-auto">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder="Search Apps"
                            className="w-full sm:w-64 border border-blue-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </label>
                </div>

                {searchData.length === 0 ? (
                    <div className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-500 py-20 px-2">
                        No App Found!
                    </div>
                ) : 
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
                        {searchData.map((singleData) => (
                            <AppCard key={singleData.id} singleData={singleData} />
                        ))}
                    </div>
                )}
            </div>
        )}
        </>
    );
};

export default AllAppsPage;
