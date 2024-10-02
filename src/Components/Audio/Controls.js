import React from 'react';
import { IconContext } from 'react-icons';
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5';
import "../../Styles/Controls.css"
import { FaPause } from 'react-icons/fa';


const Controls = ({
  isPlaying,
  setIsPlaying,
  handelNext,
  handelPrev,
  }) => {
  return (
    <IconContext.Provider value={{size:"35px", color:"#C4D0e3" }}>
      <div className="containerWrapper flex">
        <div className="actionBtn" onClick={handelPrev}>
          <IoPlaySkipBack />
        </div>
        <div className="playPauseBtn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="actionBtn" onClick={handelNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Controls