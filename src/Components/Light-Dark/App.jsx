import React, { useState } from 'react'
import { jsxDEV } from 'react/jsx-dev-runtime'
import useLocalStorage from './useLocalStorage'
import '../Light-Dark/style.css'


export default function LightDarkMode()
{
    const[theme,setTheme] = useLocalStorage("value","dark")

    function handleToggle()
    {
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme)

    return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <p>Hello World!</p>
            <button onClick={handleToggle}>Change Theme</button>
        </div>
    </div>
    )
}

