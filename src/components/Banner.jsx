import React from "react";
import Container from "./Container";
import playStoreImg from "../assets/playStoreImg.png";
import appStoreImg from "../assets/AppStoreImg.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
    return (
        <div className="bg-[#f5f7f9] text-[#001931]">
            <Container>
                <div className="py-10 px-4 sm:px-6 md:px-10">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
                        We Build <br />
                        <span className="text-[#632ee3]">Productive</span> Apps
                    </h1>
                    <p className="text-center my-4 text-sm sm:text-base md:text-[18px] text-gray-400 mt-4 md:mt-6 leading-relaxed">
                        At HERO.IO, we craft innovative apps designed to make everyday life
                        simpler, smarter, and more exciting. <br /> Our goal is to turn your
                        ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-6">
                        <a href="https://play.google.com/store/apps/" target="_blank" rel="noreferrer">
                            <button className="btn flex items-center gap-2 px-4 py-2">
                                <img className="w-6 h-6 sm:w-8 sm:h-8" src={playStoreImg} alt="Google Play" />
                                Google Play
                            </button>
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                            <button className="btn flex items-center gap-2 px-4 py-2">
                                <img className="w-6 h-6 sm:w-8 sm:h-8" src={appStoreImg} alt="App Store" />
                                App Store
                            </button>
                        </a>
                    </div>
                </div>

                <div className="mt-8 px-4 sm:px-0">
                    <img className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl" src={heroImg} alt="Hero" />
                </div>
            </Container>

            <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-10 sm:p-16 md:p-20">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10">
                    Trusted by Millions, Built for You
                </h1>

                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 px-4 sm:px-0">
                    <div className="text-white space-y-2 text-center">
                        <p className="text-sm sm:text-base">Total Downloads</p>
                        <p className="font-bold text-4xl sm:text-5xl md:text-7xl">29.6M</p>
                        <p className="text-sm sm:text-base">21% More Than Last Month</p>
                    </div>
                    <div className="text-white space-y-2 text-center">
                        <p className="text-sm sm:text-base">Total Reviews</p>
                        <p className="font-bold text-4xl sm:text-5xl md:text-7xl">906K</p>
                        <p className="text-sm sm:text-base">46% more than last month</p>
                    </div>
                    <div className="text-white space-y-2 text-center">
                        <p className="text-sm sm:text-base">Active Apps</p>
                        <p className="font-bold text-4xl sm:text-5xl md:text-7xl">132+</p>
                        <p className="text-sm sm:text-base">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
