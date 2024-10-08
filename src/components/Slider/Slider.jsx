import React, { useEffect, useState } from 'react'

const Slider = ({ min, max, even, color }) => {
    const [value, setValue] = useState("");
    let mini = 14;
    if (even) {
        if (value % 2 !== 0) { // Check if value is not even
            mini = value + 1;  // Make it even by adding 1
        } else {
            mini = value;      // If it's already even, keep it the same
        }
    }
    if (mini < 16) {
        mini = 16;
    }
    const handleChange = (e) => {
        setValue(Number(e.target.value));
    };
    const combinedValue = even ? mini : value
    return (
        <div className="w-[10%]">
            <div className="relative pt-1">
                <div className='flex justify-end'>
                    <code>{combinedValue}</code>
                </div>
                <input
                    type="range"
                    max={max}
                    value={value}
                    onChange={handleChange}
                    style={{
                        accentColor: color,
                    }}
                    className="range-slider-yellow"
                />

            </div>
        </div>
    );
};
export default Slider
