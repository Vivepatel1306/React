import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setchahrAllowed] = useState(false)
  const [password, setPassword] = ''


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/"

    for (let i = 0; i < length; i++) {
      let char = Math.ceil(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>

      <div className='text-l	bg-slate-100	 font-bold	'>
        <h1 className='text-xl	 font-bold	'>password generator</h1>
        <div className='bg-blue-100 flex overflow-hidden'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-blue-100'
            placeholder='password'
            readOnly
          />
          <button className='bg-blue-500'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-2'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length :{length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className='cursor-pointer'
              onChange={(e) => { setnumberAllowed((prev) => !prev) }}
            />
            <label >Numbers</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              className='cursor-pointer'
              onChange={(e) => { setchahrAllowed((prev) => !prev) }}
            />
            <label >Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
