import React from 'react'
import { loginEndpoint } from '../../Share/Spotify'
import '../../Styles/Login.css'
const Login = () => {
    
    //   const token = window.localStorage.getItem("token");
    //   const hash = window.location.hash;
    //   window.location.hash = "";
    //   if (!token && hash) {
    //     const _token = hash.split("&")[0].split("=")[1];
    //     window.localStorage.setItem("token", _token);
    //     setToken(_token);
    //     setClientToken(_token);
    //   } else {
    //     setToken(token);
    //     setClientToken(token);
    //   }
    
  return (
   <div className="loginPage">
    <img className='SpotifyLogo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
   <a className='loginBtn' href={loginEndpoint}>Login In</a>
   </div>
  )
}

export default Login