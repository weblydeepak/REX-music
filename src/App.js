import React, { useEffect, useState } from 'react'
import Sider from './Components/Sider/Sider'
import { Outlet } from 'react-router-dom'
import "./App.css"
import Login from './Pages/Login/Login'
import { setClientToken } from './Share/Spotify'
const App = () => {
  const [token, setToken] = useState("");

    useEffect(() => {
      const token = window.localStorage.getItem("token");
      const  hash = window.location.hash;
      window.location.hash="#"
      if(!token && hash){
        const _token = hash.split("$")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
        setClientToken(_token);
      }
       else{
        setToken(token);
        setClientToken(token);
       }
},[]);
  return !token? ( <Login/>):(
    <div className='mainCotsiner'>
      <Sider/>
      <Outlet/>
     
    </div>
  )
}

export default App