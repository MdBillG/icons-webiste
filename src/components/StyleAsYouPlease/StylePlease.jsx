import React, { useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

const iconNames = Object.keys(LucideIcons).filter(name => name !== 'createLucideIcon');
const seededRandom = (seed) => {
    let state = seed;
    return () => {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
};
const StylePlease = ({ color, currentValue }) => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.color.color);
    console.log("darkMode", darkMode)
    const getRandomIcons = useMemo(() => {
        const rng = seededRandom(123); // Use a fixed seed
        const shuffled = [...iconNames]?.sort(() => 0.5 - rng());
        return shuffled?.slice(0, 56); // Always generate 64 icons
    }, []);

    return (
        <div className={darkMode ? "rounded-md  bg-black  p-1" : "bg-gray-100 rounded-md p-1 "}>
            <div className="flex flex-wrap">
                {getRandomIcons?.map((iconName, index) => {
                    const IconComponent = LucideIcons[iconName];
                    return (
                        <div key={index} className="bg-white p-5 rounded-full shadow-sm flex items-center justify-center m-2">
                            <IconComponent size={16} color={darkMode ? color : color} className="text-gray-600" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StylePlease
