import { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { useEffect } from 'react'
import {Header, Footer} from './components'
import {Outlet} from 'react-router-dom'


function App() {
  
 // console.log(import.meta.env.VITE_APPWRITE_URL);

 const [loading,setLoading] = useState(true)
 const dispatch = useDispatch()
  

 useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login())
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
 },[])

  return !loading ? (
    <div className='min-h-screen bg-gray-900 
    flex flex-wrap content-between'>
      <div className='w-full block'>
      <Header />
        <main>
        TODO:  <Outlet />
        </main>
      <Footer />

      </div> 
    </div>
  ) : (null)
  
}

export default App
