import React from "react";

const Slogan = () => {
    return (
        <>
            <span
                className="text-[56px] text block"
                style={{
                    backgroundImage: "url('images/vibrant3.jfif')",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
                Beautiful &<br />
                <span className="text-[46px]">Consistent Icons</span>
            </span>
            <p className="text block dark:text-gray-100 text-lg">
                Made with expert craftsmanship.
            </p>
            <div className="flex gap-3">
                <div className="bg-red-700 p-2 text-white rounded-md">View all icons</div>
                <div className='bg-[#E4E4E9] p-2 rounded-md '>Get Started</div>
                <div className='bg-[#E4E4E9] p-2 rounded-md '>GitHub</div>
            </div >
        </>
    );
};

export default Slogan;
