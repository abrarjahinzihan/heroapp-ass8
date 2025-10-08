import React, { useState } from "react";
import { getStoreApp, removeFromInstalled } from "../Utility/addToLocalSt";
import Container from "../components/Container";
import downloadIcon from "../assets/icon-downloads.png";
import rattingIcon from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import useAppData from "../Hooks/useAppData";
import Loading from "../components/Loading";

const Installations = () => {
    const { loading } = useAppData();
    const data = getStoreApp();

    const [installed, setInstalled] = useState(data);
    const [sortOrder, setOrder] = useState("none");

    if (installed.length === 0) {
        return (
            <div className="col-span-12 text-center text-3xl sm:text-4xl md:text-5xl font-medium py-10">
                No App Installed!
            </div>
        );
    }

    const sortedInstalledApp = (() => {
        if (sortOrder === "sort-asc") {
            return [...installed].sort(
                (a, b) => Number(a.downloads) - Number(b.downloads)
            );
        } 
        else if (sortOrder === "sort-desc") {
            return [...installed].sort(
                (a, b) => Number(b.downloads) - Number(a.downloads)
            );
        } 
        else {
            return installed;
        }
    })();

    const handleUninstalledBtn = (id) => {
        toast("✅UnInstall App");
        removeFromInstalled(id);
        setInstalled((pre) => pre.filter((p) => p.id !== id));
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Container>
                        <div>
                            <div className="text-center my-7 space-y-2 px-4 sm:px-0">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#001931]">
                                    Your Installed Apps
                                </h1>
                                <p className="text-[#627382] text-sm sm:text-base">
                                    Explore All Trending Apps on the Market developed by us
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center my-5 gap-3 sm:gap-0 px-4 sm:px-0">
                                <h1 className="text-lg sm:text-xl font-bold text-[#001931]">
                                    ({sortedInstalledApp.length}) Apps Found
                                </h1>
                                <label className="form-control w-full sm:w-auto max-w-xs">
                                    <select
                                        className="select select-bordered w-full"
                                        value={sortOrder}
                                        onChange={(e) => setOrder(e.target.value)}
                                    >
                                        <option value="none">Sort By Downloads</option>
                                        <option value="sort-asc">Low&lt;-High</option>
                                        <option value="sort-desc">High-&gt;Low</option>
                                    </select>
                                </label>
                            </div>

                            <div className="space-y-4">
                                {sortedInstalledApp.map((ap) => (
                                    <div
                                        key={ap.id}
                                        className="flex flex-col md:flex-row justify-between items-center mt-4 shadow rounded-2xl p-6 md:p-10 gap-4 md:gap-0"
                                    >
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 w-full md:w-auto">
                                            <img
                                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                                                src={ap.image}
                                                alt={ap.title}
                                            />
                                            <div className="space-y-2 text-center sm:text-left">
                                                <h1 className="text-lg sm:text-xl font-bold text-[#001931]">
                                                    {ap.title}
                                                </h1>
                                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center sm:items-start">
                                                    <div className="flex gap-1 items-center">
                                                        <img className="w-4 h-4" src={downloadIcon} alt="downloads" />
                                                        <p className="text-green-500 text-sm sm:text-base">{ap.downloads}</p>
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <img className="w-4 h-4" src={rattingIcon} alt="rating" />
                                                        <p className="text-amber-500 text-sm sm:text-base">{ap.ratingAvg}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm sm:text-base">{ap.size} MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-auto mt-2 md:mt-0">
                                            <button
                                                onClick={() => handleUninstalledBtn(ap.id)}
                                                className="bg-green-500 py-2 px-4 rounded-md text-white cursor-pointer w-full sm:w-auto"
                                            >
                                                Uninstall
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Installations;
