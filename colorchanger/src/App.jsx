import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [color, setcolor] = useState('white')
  function colorChanger(e) {
    setcolor(e)
  }
  return (
    <div className=' size-full ' style={{ backgroundColor: color, height: '100' }} >
      <h1>hello</h1>
      <button style={{ backgroundColor: 'yellow' }} onClick={()=>{colorChanger('yellow')}}  >yellow</button>
      <button style={{ backgroundColor: 'red' }} onClick={()=>{colorChanger('red')}}  >red</button>
      <button style={{ backgroundColor: 'green' }} onClick={()=>{colorChanger('green')}}  >green</button>
      <button style={{ backgroundColor: 'blue' }} onClick={()=>{colorChanger('blue')}}  >blue</button>
    </div>
  )
}

export default App
// const [bgColor, setBgColor] = useState('blue');
// function changecolor(cn) {
//   setBgColor(cn)
// }
// {/* <h1>hello</h1>
// <button style={{ backgroundColor: 'yellow' }} onClick={() => changecolor('yellow')} >Yellow</button >
// <button style={{ backgroundColor: 'red' }} onClick={() => changecolor('red')} >Yellow</button >
// <button style={{ backgroundColor: 'blue' }} onClick={() => changecolor('blue')} >Yellow</button >
// <button style={{ backgroundColor: 'green' }} onClick={() => changecolor('green')} >Yellow</button > */}
