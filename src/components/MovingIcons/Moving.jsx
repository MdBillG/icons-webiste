// import React, { useMemo } from 'react';
// import * as LucideIcons from 'lucide-react';
// import { useSelector } from 'react-redux';

// const iconNames = Object.keys(LucideIcons).filter(name => name !== 'createLucideIcon');

// const seededRandom = (seed) => {
//     let state = seed;
//     return () => {
//         state = (state * 1664525 + 1013904223) % 4294967296;
//         return state / 4294967296;
//     };
// };

// const Moving = () => {
//     const darkMode = useSelector((state) => state.color.color);

//     const getRandomIcons = useMemo(() => {
//         const rng = seededRandom(123);
//         return [...iconNames].sort(() => 0.5 - rng()).slice(0, 120);
//     }, []);

//     return (
//         <div className={` rounded-md ${darkMode ? 'bg-black' : 'bg-black'} w-full max-w-[68rem] mx-auto my-10`}
//         >
//             <div className="grid grid-cols-16 sm:grid-cols-16 md:grid-cols-12 lg:grid-cols-16 ">
//                 {getRandomIcons.map((iconName, index) => {
//                     const IconComponent = LucideIcons[iconName];
//                     return (
//                         <div key={index} className={`${darkMode ? 'bg-white' : 'bg-gray-100'} p-2 rounded-md shadow-sm flex items-center justify-center aspect-auto`}>
//                             <IconComponent size={20} color={darkMode ? "black" : "currentColor"} className="text-gray-600" />
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Moving;

// import React, { useMemo } from 'react';
// import * as LucideIcons from 'lucide-react';
// import { useSelector } from 'react-redux';

// const iconNames = Object.keys(LucideIcons).filter(name => name !== 'createLucideIcon');

// const seededRandom = (seed) => {
//     let state = seed;
//     return () => {
//         state = (state * 1664525 + 1013904223) % 4294967296;
//         return state / 4294967296;
//     };
// };

// const Moving = () => {
//     const darkMode = useSelector((state) => state.color.color);

//     const getRandomIcons = useMemo(() => {
//         const rng = seededRandom(123);
//         return [...iconNames].sort(() => 0.5 - rng()).slice(0, 240); // Double the icons for seamless loop
//     }, []);

//     return (
//         <div className={`rounded-md ${darkMode ? 'bg-black' : 'bg-white'} w-full max-w-[68rem] mx-auto my-10 overflow-hidden`}>
//             <div className="flex animate-marquee">
//                 {[...getRandomIcons, ...getRandomIcons]?.map((iconName, index) => {
//                     const IconComponent = LucideIcons[iconName];
//                     return (
//                         <div key={index} className={`${darkMode ? 'bg-white' : 'bg-gray-100'} p-1 rounded-md shadow-sm flex items-center justify-center aspect-square w-10 h-10 flex-shrink-0 mx-[0.1rem]`}>
//                             <IconComponent size={20} color={darkMode ? "black" : "currentColor"} className="text-gray-600" />
//                         </div>

//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Moving;



import React, { useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { useSelector } from 'react-redux';

const iconNames = Object.keys(LucideIcons).filter(name => name !== 'createLucideIcon');

const seededRandom = (seed) => {
    let state = seed;
    return () => {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
};

const IconRow = ({ icons, direction }) => {
    const animationStyle = {
        animation: `${direction === 'right' ? 'scrollRight' : 'scrollLeft'} 60s linear infinite`,
    };

    const darkMode = useSelector((state) => state.color.color);

    return (
        <div className="flex overflow-hidden" style={{ width: '500%' }}>
            <div className="flex" style={animationStyle}>
                {[...icons, ...icons]?.map((iconName, index) => {
                    const IconComponent = LucideIcons[iconName];
                    return (
                        <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-md shadow-sm flex items-center justify-center aspect-square m-1`}>
                            <IconComponent size={20} color={darkMode ? "white" : "black"} className="text-gray-600" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Moving = ({ darkMode = false }) => {
    const getRandomIcons = useMemo(() => {
        const rng = seededRandom(123);
        return [...iconNames].sort(() => 0.5 - rng());
    }, []);

    const iconRows = useMemo(() => {
        const rows = [];
        for (let i = 0; i < 8; i++) {
            rows.push(getRandomIcons.slice(i * 20, (i + 1) * 20));
        }
        return rows;
    }, [getRandomIcons]);

    return (
        <div className={`rounded-md ${darkMode ? 'bg-black' : 'bg-white'} w-full max-w-[68rem] mx-auto my-10 overflow-hidden`}>
            <style>
                {`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                `}
            </style>
            {iconRows?.map((row, index) => (
                <IconRow
                    key={index}
                    icons={row}
                    darkMode={darkMode}
                    direction={index % 2 === 0 ? 'right' : 'left'}
                />
            ))}
        </div>
    );
};

export default Moving;