import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [characterAllowed, setCharacterAllowed] = useState(false)
 const [password, setPassword] = useState("")

 //ref hook

 const passwordRef = useRef(null)




 const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = 
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
  if (numberAllowed) str += "0123456789"
  if (characterAllowed) str += "!@#$%^&*{}:/"

  for (let i = 1;  i<= length; i++) {
    let char = Math.floor( Math.random() * str.length + 1 )
    pass += str.charAt(char)
    
  }
   setPassword(pass) 

}, [length, numberAllowed, characterAllowed, setPassword])



 const copyToClipBoard = useCallback (()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,26)
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(()=>{ 
  passwordGenerator()
 } , [length, numberAllowed, passwordGenerator, characterAllowed ])

  return (
    <>

     
      <div className=' w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500' > 
      <h1 className='text-xl text-center text-black '
      >
      Password Generator
      </h1>
      
        <div className='flex shadow rounded-lg overflow-hidden mb-1'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className=' outline-none bg-blue-700 text-white px-2 shrink-0'>copy</button>
        </div>


        <div className=' flex text-sm gap-x-2'>
          <div className='flex item-center gap-1'>
            <input 
            type='range'
              min={6}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}

            />
            <label>Length: {length}</label>
          </div>
          <div className=' flex item-center gap-x-1'>
          
          <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            } }
              
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className=' flex item-center gap-x-1'>
          
          <input 
            type='checkbox'
            defaultChecked={characterAllowed}
            id='charInput'
            onChange={()=>{

              //callback function in setCharacterAllowed is used to toggle between true and false
              setCharacterAllowed((prev) => !prev)
            } }
              
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
