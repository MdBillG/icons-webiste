import React from "react";
import Link from 'next/link'

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

                <div className="bg-red-700 p-2 text-white rounded-md">
                    <Link href="/Icons">View all icons
                    </Link>
                </div>
                <div className='bg-[#E4E4E9] p-2 rounded-md '> <Link href="/guide">Get Started</Link></div>
                <div className='bg-[#E4E4E9] p-2 rounded-md '>GitHub</div>
            </div >
        </>
    );
};

export default Slogan;
