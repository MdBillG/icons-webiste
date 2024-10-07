import React from 'react'
import GitHub from './github/GitHub'
import LightDark from './Mode/Light-Dark'
import BrandName from './BrandName/BrandName'
import IconsName from './BrandName/Icons'

const NavBar = () => {
    return (
        <div className='border-b border-gray-400 dark:border-gray-100 '>
            <div className='flex justify-between gap-2 p-2 mx-[5%]'>
                <div>
                    <BrandName />
                </div>
                <div className='flex gap-3 mt-1'>
                    <IconsName />
                    <div className='border-l-[1px] border-gray-950 dark:border-gray-100 m-1'>
                    </div>
                    <LightDark />
                    <div className='border-l-[1px] border-gray-950 dark:border-gray-100 m-1'>
                    </div>
                    <GitHub />
                </div>
            </div>


        </div >
    )
}

export default NavBar
