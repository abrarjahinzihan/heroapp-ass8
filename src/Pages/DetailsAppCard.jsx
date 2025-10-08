import React, { useState } from "react";
import { useParams } from "react-router";
import Container from "../components/Container";
import downloadIcon from "../assets/icon-downloads.png";
import rattingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import useAppData from "../Hooks/useAppData";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { addToStoreDb, getStoreApp } from "../Utility/addToLocalSt";
import Loading from "../components/Loading";

const DetailsAppCard = () => {
    const [toggle, setToggle] = useState(false);
    const handleInstallBtn = (appDetail) => {
        setToggle(true);
        addToStoreDb(appDetail);
    };
    const { appData, loading } = useAppData();
    const { id } = useParams();

    const appId = Number(id);
    const allReadyInstalled = getStoreApp();
    const isAllReadyInstalled = allReadyInstalled.filter((p) => p.id === appId);

    if (loading) return <Loading />;

    const appDetail = appData.find((app) => app.id === appId);

    return (
        <div>
            <Container>
                <div className="flex flex-col md:flex-row gap-5 p-6 border-b border-gray-400 mb-2 items-center">
                    <div className="w-full md:w-1/3">
                        <img className="rounded-md w-full h-auto object-cover" src={appDetail.image} alt={appDetail.title} />
                    </div>
                    <div className="space-y-3 w-full md:w-2/3">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#001931]">{appDetail.title}</h1>
                            <p className="text-[#627382] text-sm md:text-base">
                                Developed by : <span className="text-[#9F62F2]">{appDetail.companyName}</span>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-10 gap-5">
                            <div className="flex flex-col items-start">
                                <img src={downloadIcon} alt="downloads" className="w-8 h-8 mb-1" />
                                <p className="text-[#001931] text-sm md:text-base">Downloads</p>
                                <p className="font-bold text-2xl md:text-4xl text-[#001931]">{appDetail.downloads}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <img src={rattingIcon} alt="ratings" className="w-8 h-8 mb-1" />
                                <p className="text-[#001931] text-sm md:text-base">Average Ratings</p>
                                <p className="font-bold text-2xl md:text-4xl text-[#001931]">{appDetail.ratingAvg}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <img src={reviewIcon} alt="reviews" className="w-8 h-8 mb-1" />
                                <p className="text-[#001931] text-sm md:text-base">Total Reviews</p>
                                <p className="font-bold text-2xl md:text-4xl text-[#001931]">{appDetail.reviews}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleInstallBtn(appDetail)}
                            className="bg-[#00d390] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600 mt-3 w-full sm:w-auto"
                        >
                            {isAllReadyInstalled.length === 1 || toggle
                                ? "Installed"
                                : `Install Now(${appDetail.size ?? "0"} MB)`}
                        </button>
                    </div>
                </div>

                <h1 className="font-bold text-xl md:text-2xl my-4">Ratings</h1>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={appDetail.ratings} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" reversed />
                            <Tooltip />
                            <Legend />
                            <Bar
                                dataKey="count"
                                fill="#ff8811"
                                activeBar={<Rectangle fill="gold" stroke="purple" />}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="my-10">
                    <h1 className="font-bold text-xl md:text-2xl my-5 text-[#001931]">Description</h1>
                    <p className="text-[#627382] text-sm md:text-base">{appDetail.description}</p>
                </div>
            </Container>
        </div>
    );
};

export default DetailsAppCard;
