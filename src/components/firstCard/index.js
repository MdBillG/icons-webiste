import React from 'react'
import Version from './Version/version'
import Slogan from './Slogan/Slogan'
import RandomIconsGrid from './ramdonIcons/RandomIcons'
import ThreeCards from '../3Cards/3Cards'
import Available from '../Available/Available'
import AsYou from '../StyleAsYouPlease/AsYou'
import Developer from '../MeetTheDeveloper/Developer'
import Moving from '../MovingIcons/Moving'

const FirstCard = () => {
    return (
        <div className='pt-20'><div className='flex justify-around  gap-2 max-w-7xl mx-auto'>
            <div className='flex flex-col gap-3 mb-10'>
                <Version />
                <Slogan />
            </div>
            <div className='flex items-center mt-6'>
                <RandomIconsGrid />
            </div>
        </div>
            <ThreeCards />
            <Available />
            <AsYou />
            <Developer />
            <Moving />
        </div>
    )
}

export default FirstCard