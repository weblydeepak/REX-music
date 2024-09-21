import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import  '../../Styles/SiderButton.css'
import { IconContext } from 'react-icons'
const SiderButton = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive? " active":"btn-body";
  return (
   <Link to={props.to}>
   <div className={btnClass}>
    <IconContext.Provider value={{size:"24px", className:"btn-icon"}}>
    {props.icon}
    <p className='btn-title'>{props.title}</p>
    </IconContext.Provider>
   </div>
   </Link>
  )
}

export default SiderButton