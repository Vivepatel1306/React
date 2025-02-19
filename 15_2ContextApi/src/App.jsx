import { useState } from 'react'
import { Context1 } from './components/Context'
import './App.css'
import  Box  from './components/Box'
function App() {
  const [bgColor,setBgcolor]=useState("bg-white")
  const [textColor,setTextcolor]=useState("text-black")
    return (
 <>
 <Context1.Provider value={{bgColor,setBgcolor,textColor,setTextcolor}}>
  
<Box></Box>

 </Context1.Provider>

 </>
  )
}

export default App
