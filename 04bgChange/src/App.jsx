import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")

  return (
    
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>

<h1 className='flex justify-center '> Chai aur React </h1>

        <div className="fixed flex flex-wrap 
          justify-center bottom-12 inset-x-0 px-2" >

          
                <div className="flex flex-wrap justify-center 
                  shadow-lg bg-white px-3.5 py-2 rounded-3xl gap-3">
                          <button className='outline-none px-4 py-1 bg-red-700 rounded-2xl text-white'
                          onClick={()=>setColor("red")} >
                          Red
                          </button>

                          <button className='outline-none px-4 py-1 bg-blue-700 rounded-2xl text-white' 
                           onClick={()=>setColor("blue")}>
                          Blue
                          </button>

                          <button className='outline-none px-4 py-1 bg-green-700 rounded-2xl text-white' 
                           onClick={()=>setColor("green")}>
                          Green
                          </button>

                          <button className='outline-none px-4 py-1 bg-yellow-700 rounded-2xl text-white' 
                           onClick={()=>setColor("yellow")}>
                          Yellow
                          </button>

                          <button className='outline-none px-4 py-1 bg-gray-600 rounded-2xl text-white' 
                           onClick={()=>setColor("white")}>
                          White
                          </button>
                  </div>
        </div> 
      </div>
    
  )
}

export default App
