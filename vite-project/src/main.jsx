import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// create elemnt through reacxt

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click to visit on google'
)

createRoot(document.getElementById('root')).render(

 <App/>
)
