'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const LightDark = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
            (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setDarkMode(isDarkMode)
    }, [])

    useEffect(() => {
        // Apply theme to document and save preference
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className='mt-1'>
            {darkMode ? (
                <button onClick={toggleDarkMode}>
                    <Sun size={20} strokeWidth={1.75} color='#FDB813' />
                </button>
            ) : (
                <button onClick={toggleDarkMode}>
                    <Moon size={20} color="black" strokeWidth={1.75} />

                </button>
            )}
        </div>
    )
}

export default LightDark
