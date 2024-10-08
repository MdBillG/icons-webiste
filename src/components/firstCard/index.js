import React from 'react'
import Version from './Version/version'
import Slogan from './Slogan/Slogan'
import RandomIconsGrid from './ramdonIcons/RandomIcons'
import ThreeCards from '../3Cards/3Cards'
import Available from '../Available/Available'

const FirstCard = () => {
    return (
        <><div className='flex justify-around my-10 gap-2'>
            <div className='flex flex-col gap-3'>
                <Version />
                <Slogan />
            </div>
            <div className='flex items-center mt-6'>
                <RandomIconsGrid />
            </div>
        </div>
            <div className=''>
                <ThreeCards />
                <Available />
            </div>
        </>
    )
}

export default FirstCard