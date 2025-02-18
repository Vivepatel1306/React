import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // // setCounter is a kind of function which returns the manipulated value 
  // let [counter, setCounter] = useState(5)
  // const addValue = () => {
  //   if(counter<20){
  //     setCounter(counter + 1)
  //     // console.log("clicked", counter);
  //   }

  // }
  // const subValue=()=>{
  //   if(counter>0){
  //     setCounter(counter-1)
  //     // console.log("clicked",counter);
  //   }
  // }
 
  // return (
  //   <>
  //     <h1>chai or react</h1>
  //     <h3>countre value :{counter}</h3>
  //     <button onClick={addValue}>Add value</button>
  //     <br />
  //     <button onClick={subValue}>Sub value</button>
  //   </>
  // )

  let [counter,setCounter]=useState(5);
  function add(){
    setCounter(counter+1);
  }
  function sub(){
    setCounter(counter-1);
  }

  return <div>
    <h3>counter valuee: {counter}</h3>
    <button onClick={add}>add</button>
    <button onClick={sub}>sub</button>
  </div>
}

export default App
