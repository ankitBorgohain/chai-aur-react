import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    cosnt [loader, setLoader] =useState(true)
    const authStatus = useSelector(state =>  state.auth.status)
 
    useEffect(() => {
      if(authentication && authStatus !== authentication){
            navigate("/login")
      }else if(!authentication && authStatus !== authentication){
        navigate("/login")
      }
      setLoader(false)

    }, [authStatus, navigate, authentication])
    

  return loader ?  <h1>Loading...</h1> : <>{children}</>
}