import React from "react";

const OnPage = () => {
    return (
        <div className=" ml-4 my-16 a sticky">
            <div className="border-l border-red-500 p-2 fixed text-sm ">
                <h1 className=" text-lg mb-1 ml-2">On this Page</h1>
                <div className="flex flex-col gap-2 ml-2">
                    <a href="#availableIcons"><h2 className="" > Available Icons</h2></a>


                    <h2>Code Optimization</h2>
                    <a href="#officalPackages"><h2>Official Packages</h2></a>

                </div>


            </div>
        </div>
    );
};

export default OnPage;
