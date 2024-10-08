import { RotateCw } from 'lucide-react'
import { HexColorPicker, HexColorInput } from "react-colorful";
import React, { useState } from 'react'
import Slider from '../Slider/Slider';

const AsYou = () => {
    const [showHex, setShowHex] = useState(false)
    const [color, setColor] = useState("#aabbcc");
    const showHexBlock = () => setShowHex(!showHex)
    const hexCode = <HexColorInput color={color} onChange={setColor} />
    console.log("object", hexCode)

    const exactCode = hexCode?.props?.color || "black"

    console.log("{showHex?.props?.color}", hexCode?.props?.color)
    return (
        <div>
            <div className='flex'>
                <h1>Style as you please</h1>
                <RotateCw />
            </div>
            <h1>Iconarium has a lot of customization options <br />to match the icons with your UI.</h1>
            <div>color</div>
            <div className={`border-2  w-[9%] flex justify-around items-center p-1 rounded-md`}
                style={{ borderColor: exactCode }}>
                <button className="w-6 h-6 rounded-full  bg-black" onClick={showHexBlock} />
                <code className="text-gray-700 text-lg font-medium">{exactCode}</code>
            </div>

            {showHex &&
                <HexColorPicker color={color} onChange={setColor} />
            }
            <p>Size</p>
            <Slider max={3} color={color} />
            <Slider max={48} min={16} even={true} color={color} />
        </div>
    )
}

export default AsYou
