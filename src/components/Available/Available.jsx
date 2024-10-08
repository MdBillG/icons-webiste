import React from 'react'

const Available = ({ size = 50, color = "#61DAFB" }) => {
    const red = "#202127"
    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className='mb-2 text-[#67676C]'>Available For:</h1>
            <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill={color} />
                <g stroke={color} strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        </div>
    )
}

export default Available
