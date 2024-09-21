import React from 'react'
import SiderButton from './SiderButton'
import "../../Styles/Sider.css"
import { MdFavorite } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaSignOutAlt , FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
const Sider = () => {
  return (
    <div className='SiderContainer'>
      <img className='LogoImage'
       src="https://img.freepik.com/premium-vector/cool-dinosaur-listening-music-with-headphones_145832-247.jpg" alt="logoImage" />
     <div className="">
     <SiderButton title="feed" to="/feed" icon={ <MdSpaceDashboard/>} />
     <SiderButton title="trending" to="/trending" icon={ <FaGripfire/>} />
     <SiderButton title="player" to="/player" icon={ <FaPlay/> } />
     <SiderButton title="favorites" to="/favorites" icon={ <MdFavorite/>} />
     <SiderButton title="Library" to="/" icon={ <IoLibrary/>} />
     </div>
     
     <SiderButton title="Sign Out" to="/" icon={ <FaSignOutAlt/>} />
    </div>
  )
}

export default Sider