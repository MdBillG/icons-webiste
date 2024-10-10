"use client";

// import React, { useState } from 'react';
// import * as Icons from 'bilalreact-icons-library';
// import SideBar from '@/components/SideBar/SideBar';

// const IconShowcase = () => {
//     const [copiedIcon, setCopiedIcon] = useState(null);
//     const [clicledIcon, setClickedIcon] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     console.log("obisOpenject", isOpen)

//     const toggleSideBar = () =>
//         setIsOpen(true)

//     const clickedIcon = (iconName) => {
//         setClickedIcon(iconName)
//     }

//     console.log("clicledIcon: ", clicledIcon)
//     const iconNames = Object.keys(Icons);

//     const handleIconClick = (iconName) => {
//         const jsxElement = `<${iconName} size={24} />`;
//         navigator.clipboard.writeText(jsxElement).then(() => {
//             setCopiedIcon(iconName);
//             setTimeout(() => setCopiedIcon(null), 2000); // Hide tooltip after 2 seconds
//         });
//     };
//     const totalWidth = isOpen ? 'w-[70%] flex ml-[28%]' : 'w-[100%]';

//     return (
//         <><SideBar isOpen={isOpen}  >
//             {clickedIcon && (
//                 <div className="flex flex-col items-center justify-center p-4">
//                     {React.createElement(Icons[clickedIcon], { size: 48 })}
//                     <span className="mt-4 text-lg">{clickedIcon}</span>
//                     <button
//                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         onClick={() => copyToClipboard(clickedIcon)}
//                     >
//                         Copy JSX
//                     </button>
//                 </div>
//             )}
//         </SideBar>

//             <div className={`${totalWidth}  transition-all duration-300 ease-in-out my-10`}>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 ">
//                     {iconNames.map((iconName) => {
//                         const IconComponent = Icons[iconName];
//                         return (
//                             <div
//                                 key={iconName}
//                                 className="flex flex-col items-center justify-center p-2 border rounded cursor-pointer hover:bg-gray-100 relative"
//                                 onClick={() => { toggleSideBar(); clickedIcon(iconName) }}
//                             >
//                                 <IconComponent size={24} />
//                                 <span className="mt-2 text-xs text-center">{iconName}</span>
//                                 {copiedIcon === iconName && (
//                                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 mb-2">
//                                         JSX Copied!
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <Icons.Apple />
//             </div>

//         </>
//     );
// };

// export default IconShowcase;

import React, { useState } from "react";
import * as Icons from "bilalreact-icons-library";
import SideBar from "@/components/SideBar/SideBar";
import { Clipboard } from "lucide-react";

const IconShowcase = () => {
    const [copiedIcon, setCopiedIcon] = useState(null);
    const [clickedIcon, setClickedIcon] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => setIsOpen(true);

    const handleIconClick = (iconName) => {
        setClickedIcon(iconName);
        toggleSideBar();
    };

    const copyToClipboard = (iconName) => {
        const jsxElement = `<${iconName} size={24} />`;
        navigator.clipboard.writeText(jsxElement).then(() => {
            setCopiedIcon(iconName);
            setTimeout(() => setCopiedIcon(null), 2000);
        });
    };

    const iconNames = Object.keys(Icons).filter(
        (name) => typeof Icons[name] === "function"
    );

    const totalWidth = isOpen ? "w-[70%] ml-[28%]" : "w-[100%]";

    const renderIcon = (iconName, size = 32) => {
        const IconComponent = Icons[iconName];
        return typeof IconComponent === "function" ? (
            <IconComponent size={size} />
        ) : null;
    };
    const code = (iconName) => {
        return (
            <pre className="bg-gray-100 p- rounded-md overflow-x-auto text-[13px]">
                <code>
                    {`import { ${iconName} } from 'lucide-react';\n\nconst App = () => {\n  return (\n    <${iconName} />\n  );\n};\n\nexport default App;`}
                </code>
            </pre>
        );
    };

    return (
        <>
            <SideBar isOpen={isOpen}>
                {clickedIcon && (
                    <div className="flex flex-col items-center justify-center p-4 gap-2 ">
                        <div className="flex items-baseline">
                            <span className="mt-4 text-3xl">{clickedIcon}</span>
                        </div>

                        {renderIcon(clickedIcon, 180)}
                        <button
                            className=" p-2   text-black rounded hover:bg-gray-600"
                            onClick={() => copyToClipboard(clickedIcon)}
                        >
                            <Clipboard />
                        </button>
                        {code(clickedIcon)}
                    </div>
                )}
            </SideBar>

            <div
                className={`${totalWidth} transition-all duration-300 ease-in-out my-10`}
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {iconNames.map((iconName) => (
                        <div
                            key={iconName}
                            className="flex flex-col items-center justify-center p-2 border rounded cursor-pointer hover:bg-gray-100 relative"
                            onClick={() => handleIconClick(iconName)}
                        >
                            {renderIcon(iconName)}
                            <span className="mt-2 text-xs text-center">{iconName}</span>
                            {copiedIcon === iconName && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 mb-2">
                                    JSX Copied!
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IconShowcase;
