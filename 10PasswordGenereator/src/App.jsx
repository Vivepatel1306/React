import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setchahrAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook

  const passwordref = useRef(null)

  const CopyPassword = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
// hello
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>

      <div className='text-l	bg-slate-100	 font-bold	'>
        <h1 className='text-xl	 font-bold	'>password generator</h1>
        <div className='bg-blue-100 flex overflow-hidden'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-blue-100'
            placeholder='password'
            ref={passwordref}
            readOnly
          />
          <button onClick={CopyPassword} className='bg-blue-500'>copy</button>
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


