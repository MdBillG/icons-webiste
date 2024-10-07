import React, { useMemo } from 'react';
import * as LucideIcons from 'lucide-react';

const iconNames = Object.keys(LucideIcons).filter(name => name !== 'createLucideIcon');

// Simple seeded random number generator
const seededRandom = (seed) => {
    let state = seed;
    return () => {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
};

const RandomIconsGrid = () => {
    const getRandomIcons = useMemo(() => {
        const rng = seededRandom(123); // Use a fixed seed
        const shuffled = [...iconNames]?.sort(() => 0.5 - rng());
        return shuffled?.slice(0, 40); // Always generate 64 icons
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <div className="grid grid-cols-10 gap-1">
                {getRandomIcons?.map((iconName, index) => {
                    const IconComponent = LucideIcons[iconName];
                    return (
                        <div key={index} className="bg-white p-4 rounded-md shadow-sm flex items-center justify-center">
                            <IconComponent size={14} className="text-gray-600" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RandomIconsGrid;