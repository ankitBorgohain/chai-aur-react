import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const reactElement = {
  type :'a',
  props : {
      href : "https://google.com",
      target : "_blank"
  },
  children : "Click on Me to Google it"
}

const reactElement2 = React.createElement('a', {
  href : 'https://google.com',
  target: '_blank'
},'Click me go search google')

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  
)
