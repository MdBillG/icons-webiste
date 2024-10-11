"use client";

import SideBar from "@/components/SideBar/SideBar";
import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";

const Packages = () => {
    return (
        <>
            <h1 className="text-center my-5 text-2xl font-bold">Packages</h1>
            <div className="max-w-md bg-[#F6F6F7] mx-auto p-3 my-5 flex flex-col gap-4 rounded-md">
                <div className=" flex justify-center gap-5 ">
                    <div className="bg-white p-2">
                        <svg
                            width={50}
                            height={50}
                            viewBox="-11.5 -10.23174 23 20.46348"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                            <g stroke="#61DAFB" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2" />
                                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                            </g>
                        </svg>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1>Iconarium-react</h1>
                        <div className="flex">
                            <h1 className="bg-[#5B5B5B] p-[3px] text-sm rounded-l-sm ">
                                npm
                            </h1>
                            <h1 className="bg-[#F37F40] p-[3px] text-sm rounded-r-sm">
                                v0.1.0
                            </h1>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">
                    A Iconarium package for React applications
                </h1>
                <div className="flex justify-center gap-4">
                    <button className="bg-[#FF7070] p-2 rounded-md">Guide</button>
                    <button className="bg-[#E4E4E9] p-2 rounded-md">Source</button>
                </div>
            </div>

            <h1 className="text-center my-5 text-2xl font-bold">Soon</h1>
            <div className="max-w-md bg-[#F6F6F7] mx-auto p-3 my-5 flex flex-col gap-4 rounded-md">
                <div className=" flex justify-center gap-5 ">
                    <div className="bg-white p-2">
                        <svg
                            width={50}
                            height={50}
                            viewBox="-11.5 -10.23174 23 20.46348"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* <circle cx="0" cy="0" r="2.05" fill="#61DAFB" /> */}
                            <g stroke="#61DAFB" strokeWidth="1" fill="none">
                                {/* <ellipse rx="11" ry="4.2" /> */}
                                {/* <ellipse rx="1" ry="4.2" transform="rotate(60)" /> */}
                                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                            </g>
                        </svg>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1>Iconarium-angular</h1>
                        <div className="flex">
                            <h1 className="bg-[#5B5B5B] p-[3px] text-sm rounded-l-sm ">
                                npm
                            </h1>
                            <h1 className="bg-[#F37F40] p-[3px] text-sm rounded-r-sm">
                                v0.1.0
                            </h1>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">
                    A Iconarium package for React applications
                </h1>
                <div className="flex justify-center gap-4">
                    <button className="bg-[#FF7070] p-2 rounded-md cursor-not-allowed">Guide</button>
                    <button className="bg-[#E4E4E9] p-2 rounded-md cursor-not-allowed">Source</button>
                </div>
            </div>
        </>
    );
};

export default Packages;
