import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setCounter is a kind of function which returns the manipulated value 
  let [counter, setCounter] = useState(5)
  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1)
      // console.log("clicked", counter);
    }

  }
  const subValue=()=>{
    if(counter>0){
      setCounter(counter-1)
      // console.log("clicked",counter);
    }
  }
 
  return (
    <>
      <h1>chai or react</h1>
      <h3>countre value :{counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Sub value</button>
    </>
  )
}

export default App
