import React, { useEffect, useRef, useState } from 'react'
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation'
// import Controls from './Controls'
import  '../../Styles/AudioPlayer.css'
const AudioPlayer = ({currentTracks , currentIndex, setCurrentIndex, total}) => {
 
  const audioRed= useRef(null);
  const [isPlaying, setIsPlaying]=useState(false);
  
 const togglerPlayPause=()=>{
 
   setIsPlaying(!isPlaying);
   if (isPlaying) {
     audioRed.current.pause();
   } else {
     audioRed.current.play();
   }
 }


const artists = [];
  if(currentTracks!==undefined ){
    currentTracks.artists.map((artist)=> artists.push(artist.name));
  }



  return (
   <div className="PlayerBody flex">
    <div className="playerLeftBody">
   {currentTracks&& <ProgressCircle
          percentage={70}
          isPlaying={true}
          image={curretTracks?.images[0]?.url}
          size={300}
          color="#C96850"
        />}
    </div>
    <div className="playerRightBody flex">
      <p className='songTitle'>{currentTracks?.name}

      </p>
      <p className='songArtist'>{artists.join("|")}</p>
      <div className="playerRightBottom flex">
        <div className="songDuration flex">
          {/* <p className="duration">0:{addZero(Math.round(trackProgress))}</p> */}
          <p className="duration">0</p>
          <WaveAnimation isPlaying={true} />
          <p className="duration">0.30</p>
        </div>

        {/* <div className="conttroler">
          <button onClick={playHandle}>{isPlaying?"play":'pause'}</button>
        </div> */}

          {/* <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
          /> */}
      </div>
    </div>
   </div>
  )
}

export default AudioPlayer