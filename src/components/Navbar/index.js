import React from "react";
import GitHub from "./github/GitHub";
import LightDark from "./Mode/Light-Dark";
import BrandName from "./BrandName/BrandName";
import IconsName from "./BrandName/Icons";
import PacakageName from "../Package/PacakageName";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="border-b border-gray-400 dark:border-gray-100 ">
            <div className="flex justify-between gap-2 p-2 mx-[5%]">
                <Link href="/">
                    <BrandName />
                </Link>
                <div className="flex gap-3 mt-1">
                    <Link href="/Icons">
                        <IconsName />
                    </Link>
                    <div className="border-l-[1px] border-gray-950 dark:border-gray-100 m-1"></div>
                    <Link href="/packages">
                        <PacakageName />
                    </Link>
                    <div className="border-l-[1px] border-gray-950 dark:border-gray-100 m-1"></div>
                    <LightDark />
                    <div className="border-l-[1px] border-gray-950 dark:border-gray-100 m-1"></div>
                    <Link href="https://github.com/MdBillG/icons-webiste">
                        <GitHub />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
