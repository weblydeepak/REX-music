import React from 'react';
import { IconContext } from 'react-icons';
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5';
import "../../Styles/Controls.css"


const Controls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total}) => {
  return (
    <IconContext.Provider value={{size:"35px", color:"#C4D0e3" }}>
      <div className="containerWrapper flex">
        <div className="actionBtn" onClick={handlePrev}>
        <IoPlaySkipBack/>
        </div>
        <div className="playPauseBtn" onClick={setIsPlaying(!isPlaying)}>
          <IoPlay/>
        </div>
        <div className="actionbtn" onClick={handleNext}>
        <IoPlaySkipForward/>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Controls