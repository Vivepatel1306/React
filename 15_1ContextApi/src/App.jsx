import { useState } from 'react'
import './App.css'
import { Mycontext } from './components/CreateContext'
import Show from './components/Show'

function App() {
  const [name, setName] = useState("");
  const [displayname, setDisplayname] = useState("");

  return (
    <>
    <Mycontext.Provider value={{name,setName,displayname}}>
  
    <input
     type="text"
     value={name}
     onChange={(e)=>setName(e.target.value)}
placeholder='Enter your name'
     />
     <button onClick={() => {
                console.log("Button clicked");
                // displayname=()=>{
                  setDisplayname(name)
                 setName()
                // }
            }
            }>set</button>
     <Show></Show>
         
    </Mycontext.Provider>
    </>
  )
}

export default App
