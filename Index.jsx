import React from 'react'
import { createRoot } from 'react-dom/client'
// import AutoComplete from './src/Components/search-autoComplete/AutoComplete'
// import App from './src/Components/TicTacToe/App'
import Flag from './src/Components/showFlag-Feature/Child'
import App from './src/Components/showFlag-Feature/App'

const root = createRoot(document.getElementById('root'))

root.render(
    // <AutoComplete/>
    // <App/>
    <Flag>
        <App></App>
    </Flag>
)