import React from 'react'
import Version from './Version/version'
import Slogan from './Slogan/Slogan'
import RandomIconsGrid from './ramdonIcons/RandomIcons'

const FirstCard = () => {
    return (
        <div className='flex justify-evenly my-10 gap-2'>
            <div className='flex flex-col gap-3'>
                <Version />
                <Slogan />
            </div>
            <div className='flex items-center mt-6'>
                <RandomIconsGrid />
            </div>

        </div>
    )
}

export default FirstCard
