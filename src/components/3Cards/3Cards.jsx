import { Aperture, Feather, Palette } from "lucide-react";
import React from "react";

const FeatureCard = ({ Icon, title, description }) => (
    <div className="bg-[#F6F6F7] p-6 rounded-lg shadow-sm flex-1 dark:bg-[#202127]">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="text-red-500" size={20} />
        </div>
        <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-100">{description}</p>
    </div>
);


const ThreeCards = () => {
    const features = [
        {
            Icon: Feather,
            title: "Lightweight & Scalable",
            description: "Icons are lightweight, highly optimized scalable vector graphics (SVG)."
        },
        {
            Icon: Aperture,
            title: "Clean & consistent",
            description: "Designed with a strict set of design rules for consistency in style and readability."
        },
        {
            Icon: Palette,
            title: "Customizable",
            description: "Customize the color, size, stroke width, and more."
        }
    ];

    return (
        <div className=" flex gap-3 mx-[7.5%]  2xl:mx-[10.5%] ">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    );
};

export default ThreeCards;
