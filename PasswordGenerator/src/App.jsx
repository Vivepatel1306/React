import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'

function App() {
  let [password, setPassword] = useState("")
  let [length, setLength] = useState(8)
  let [numAllowed, setnumAllowed] = useState(false)
  let [charAllowed, setcharAllowed] = useState(false)
  const refrence = useRef(null)


  const Copy = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    refrence.current?.select()
  }, [password]
  )
  function passwordGenerator() {
    let pass = ""
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let symbol = "!@#$%^&*()_+-={}[]|\:;'<>,.?/"

    if (numAllowed) { char += num }
    if (charAllowed) { char += symbol }
    for (let i = 0; i < length; i++) {
      let selected = char.charAt(Math.ceil(Math.random() * char.length))
      pass += selected
    }
    console.log(char);


    setPassword(pass)

  }
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='bg-lime-400 rounded-xl 	justify-center items-center min-h-96	gap-4	flex 	flex-col	'>
        <h1 className='text-4xl	 font-bold	'>Password Generator</h1>
        <div >
          <input
            type="text"
            value={password}
            className='w-9/5 text-xl rounded-xl p-3	font-semibold			'
            readOnly
            placeholder='Password'
            ref={refrence}
          />
          <button onClick={Copy} className='hover:bg-red-500 bg-red-600	ml-4 min-h-10 p-2 rounded-xl'>Copy</button>
        </div>
        <div className='flex gap-2 	justify-center items-center		 '>
          <input
            type="range"
            value={length}
            min={8}
                       max={100}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <h3  className='text-xl font-bold'>Length :{length}</h3>


          <input
            type="checkbox"
            className='size-5	'
            value={numAllowed}
           
            onChange={() => { setnumAllowed((p) => !p) }}
          />
          <h3 className='text-xl font-bold'>Number</h3>
          <input
            type="checkbox"
            className='size-5	'
            value={charAllowed}
            onChange={() => { setcharAllowed((p) => !p) }}
          />
          <h3 className='text-xl font-bold'>Character</h3>

        </div>
      </div>
    </>
  )
}

export default App
