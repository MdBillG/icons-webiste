import { MoveUpRight, Triangle } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t-[1px] '>


            <div className='flex  justify-between max-w-[68rem] mx-auto my-7'>
                <div>Copyright © 2024 Iconarim</div>
                <div className='flex items-baseline'>
                    GitHub
                    <div className='mt-1 ml-1 flex items-center'>
                        <MoveUpRight size={13} color='#929296' />
                    </div>
                </div>
                <div className='flex gap-2 bg-black p-2 rounded-md text-white'><Triangle />
                    <div>
                        Powered by Vercel
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
