import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import rattingIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppCard = ({ singleData }) => {
    return (
        <Link to={`/details/${singleData.id}`}>
            <div className="shadow rounded-md p-4 w-fit space-y-3 hover:scale-105 transition ease-in-out">
                <div>
                    <img
                        className="rounded-md w-[200px] h-[200px] overflow-hidden object-cover"
                        src={singleData.image}
                        alt=""
                    />
                </div>
                <h1 className="mt-3 font-semibold text-lg text-gray-800 ">{singleData.title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 bg-slate-200 py-1 px-3 rounded-md">
                        <img className="w-[16px] h-[16px]" src={downloadIcon} alt="" />
                        <h1 className="text-green-500">{singleData.downloads}</h1>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-100 py-1 px-3  rounded-md">
                        <img className="w-[16px] h-[16px]" src={rattingIcon} alt="" />
                        <p className="text-[#eaa764]">{singleData.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;