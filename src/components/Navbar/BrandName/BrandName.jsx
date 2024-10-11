import React from 'react'

const BrandName = () => {
    return (
        <div className="relative text-3xl text-white dark:text-gray-100">
            <span
                className="inline-block bg-cover bg-center"
                style={{
                    backgroundImage: "url('images/vibrant3.jfif')",
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                Iconarium
            </span>
        </div>
    )
}

export default BrandName
