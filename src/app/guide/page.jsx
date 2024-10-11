import Guides from '@/components/Guides/Guide'
import WhatisIconarium from '@/components/Guides/WhatisIconarium'
import OnPage from '@/components/Guides/whats _on _the_page/OnPage'
import React from 'react'

const Guide = () => {
    return (
        <div className='flex max-w-[68rem] mx-auto pt-10 z-50'>
            <Guides />
            <OnPage />

        </div>
    )
}

export default Guide
