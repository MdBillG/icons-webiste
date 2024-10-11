'use client'

import React, { useState } from 'react'
import BrandName from '../Navbar/BrandName/BrandName';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const SideBar = ({ children, isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className='relative'>
                    <div className='fixed top-0   h-screen w-[25%]  z-10 bg-[#F6F6F7] transition-all duration-300 ease-in-out'>
                        <div className=' flex justify-center p-2 border-b border-gray-400 sticky top-0  -z-10'>
                            <BrandName />
                        </div>
                        <div className=''>
                            {children}
                        </div>
                        <div className='absolute top-14 left-[96%] border-red-950 z-30 bg-[#E4E4E9] rounded-full flex items-center  '>
                            <button onClick={onClose} ><ChevronLeft size={28} /></button>
                        </div>
                    </div >
                </div>
            )}
        </>
    )
}

export default SideBar
