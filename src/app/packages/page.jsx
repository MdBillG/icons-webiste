'use client'

import SideBar from '@/components/SideBar/SideBar'
import React, { useState } from 'react'

const Packages = () => {
    const [isOpen, setIsOpen] = useState(true)


    const toggleSideBar = () => setIsOpen(!isOpen)
    return (
        <div>
            <SideBar isOpen={isOpen}>
                <button onClick={toggleSideBar}>Click me to open/close</button>
                hello from page
            </SideBar>
            hello
        </div>
    )
}

export default Packages
