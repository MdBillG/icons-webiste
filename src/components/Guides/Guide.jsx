import React from 'react'
import WhatisIconarium from './WhatisIconarium'
import AvailableIcons from './AvailableIcons'
import CodeOptimization from './CodeOptimization'
import OfficialPackages from './OfficialPackages'

const Guides = () => {
    return (
        <div className=' w-[80%]'>
            <WhatisIconarium />
            <AvailableIcons />
            <CodeOptimization />
            <OfficialPackages />
        </div>
    )
}

export default Guides
