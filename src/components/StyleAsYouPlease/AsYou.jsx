import { RotateCw } from 'lucide-react'
import { HexColorPicker, HexColorInput } from "react-colorful";
import React, { useState } from 'react'
import Slider from '../Slider/Slider';
import StylePlease from './StylePlease';

const AsYou = () => {
    const [showHex, setShowHex] = useState(false)
    const [color, setColor] = useState("#aabbcc");
    const showHexBlock = () => setShowHex(!showHex)
    const hexCode = <HexColorInput color={color} onChange={setColor} />
    const exactCode = hexCode?.props?.color || "black"
    const [currentValue, setCurrrentValue] = useState("")
    return (
        <>
            {/* <div className='relative'>
                <div className='flex justify-start bg-[#E4E4E9]  p-3 mt-4 mx-[10%] rounded-md  '>
                    <div>
                        <div className='flex justify-between my-3'>
                            <h1 className='text-2xl'>Style as you please</h1>
                            <RotateCw />
                        </div>
                        <h1 className='my-2'>Iconarium has a lot of customization options <br />to match the icons with your UI.</h1>
                        <div className='flex justify-between my-2 mt-5'>
                            <div>color</div>
                            <div>
                                <div className={`border-2  w-[9%] min-w-[120%] flex justify-around items-center p-1 rounded-md`}
                                    style={{ borderColor: exactCode }}>
                                    <button className={`w-6 h-6 rounded-full  bg-[${exactCode}]`} onClick={showHexBlock}
                                        style={{ backgroundColor: exactCode }} />
                                    <code className="text-gray-700 text-lg font-medium">{exactCode}</code>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <p>ThickNess</p>
                                <Slider max={3} color={color} setCurrrentValue={setCurrrentValue} />
                                <p>Size</p>
                                <Slider max={48} min={16} even={true} color={color} setCurrrentValue={setCurrrentValue} />
                            </div>
                            <div className='absolute -top-1 left-[50%] '>
                                {showHex &&
                                    <HexColorPicker color={color} onChange={setColor} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] absolute top-5 left-[45%]'>
                    <StylePlease />
                </div>
            </div> */}

            <div className=' flex justify-between items-center max-w-[68rem] mx-auto'>
                <div className='flex justify-start bg-[#E4E4E9]  p-3  rounded-l-md w-[45%] border  '>
                    <div>
                        <div className='flex justify-between my-3'>
                            <h1 className='text-2xl'>Style as you please</h1>
                            <RotateCw />
                        </div>
                        <h1 className='my-2'>Iconarium has a lot of customization options <br />to match the icons with your UI.</h1>
                        <div className='flex justify-between my-2 mt-5'>
                            <div>color</div>
                            <div>
                                <div className={`border-2  w-[9%] min-w-[120%] flex justify-around items-center p-1 rounded-md`}
                                    style={{ borderColor: exactCode }}>
                                    <button className={`w-6 h-6 rounded-full  bg-[${exactCode}]`} onClick={showHexBlock}
                                        style={{ backgroundColor: exactCode }} />
                                    <code className="text-gray-700 text-lg font-medium">{exactCode}</code>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <p>ThickNess</p>
                                <Slider max={3} color={color} setCurrrentValue={setCurrrentValue} />
                                <p>Size</p>
                                <Slider max={48} min={16} even={true} color={color} setCurrrentValue={setCurrrentValue} />
                            </div>
                            <div className='absolute -top-1 left-[50%] '>
                                {showHex &&
                                    <HexColorPicker color={color} onChange={setColor} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[65%] '>
                    <StylePlease color={color} currentValue={currentValue} />
                </div>
            </div>
        </>

    )
}

export default AsYou
