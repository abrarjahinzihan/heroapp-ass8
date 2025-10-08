import React from "react";
import Container from "./Container";
import playStoreImg from "../assets/playStoreImg.png";
import appStoreImg from "../assets/AppStoreImg.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
    return (
        <div className="bg-[#f5f7f9]">
        <Container>
            <div className="py-10">
            <h1 className="font-bold text-6xl text-center">
                We Build <br /> <span className="text-[#632ee3]">Productive </span>{" "}
                Apps
            </h1>
            <p className="text-center my-4">
                At HERO.IO, we craft innovative apps designed to make everyday life
                simpler, smarter, and more exciting. <br /> Our goal is to turn your
                ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-5 justify-center">
                <a href="https://play.google.com/store/apps/" target="_blank">
                <button className="btn">
                    <img src={playStoreImg} alt="" />
                    Google Play
                </button>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                <button className="btn">
                    <img src={appStoreImg} alt="" /> App Store
                </button>
                </a>
            </div>
            </div>
            <div className="">
            <img className="mx-auto" src={heroImg} alt="" />
            </div>
        </Container>
        <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-20">
            <h1 className="text-center  text-5xl font-bold text-white mb-10">
            Trusted by Millions, Built for You
            </h1>

            <div className="md:flex justify-center gap-30">
            <div className="text-[#ffffff] space-y-2 text-center">
                <p>Total Downloads</p>
                <p className="font-bold text-7xl">29.6M</p>
                <p>21% More Than Last Month</p>
            </div>
            <div className="text-[#ffffff] space-y-2 text-center">
                <p>Total Reviews</p>
                <p className="font-bold text-7xl">906K</p>
                <p>46% more than last month</p>
            </div>
            <div className="text-[#ffffff] space-y-2 text-center">
                <p>Active Apps</p>
                <p className="font-bold text-7xl">132+</p>
                <p>31 more will Launch</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;