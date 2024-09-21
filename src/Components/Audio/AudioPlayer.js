import React, { useEffect, useRef, useState } from 'react'
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation'
// import Controls from './Controls'
import  '../../Styles/AudioPlayer.css'
const AudioPlayer = ({currentTracks , currentIndex,setCurrentIndex, total}) => {
  // console.log(currentTracks?.artists);
  
  const [isPlaying, setIsPlaying]= useState(true)
  const [trackProgress, setTrackProgress]= useState(0)
  var audioSrc = total[currentIndex]?.track.preview_url;
  
  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  // const intervalRef = useRef(null);
  // const isReady = useRef(false)

  const {duration}= audioRef.current;


  const currentPercecntage= duration?(trackProgress/duration) *100:0;

  

  // console.log(audioRef.current);
  //  const {duration} = audioRef.current;
   

  //  const currentPercecntage =  duration?(trackProgress/duration) *100:0;
   
  //  const startTimer=()=>{
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(()=>{
  //   if(audioRef.current.ended){
  //     handleNext();
  //   }
  //   else{
  //     setTrackProgress(audioRef.current.currentTime);
  //   }
  //   },[1000])
  //  }
   
  //  useEffect(() => {
  //   if (audioRef.current.src) {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //       startTimer();
  //     } else {
  //       clearInterval(intervalRef.current);
  //       audioRef.current.pause();
  //     }
  //   } else {
  //     if (isPlaying) {
  //       audioRef.current = new Audio(audioSrc);
  //       audioRef.current.play();
  //       startTimer();
  //     } else {
  //       clearInterval(intervalRef.current);
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying]);
  //  useEffect(()=>{
  //  audioRef.current.pause();
  //  audioRef.current= new Audio(audioSrc);
  //  setTrackProgress(audioRef.current.currentTime)
  //  if(isReady.current){
  //    audioRef.current.play();
  //    setIsPlaying(true);
  //    startTimer();
  //  }else{
  //   isReady.current = true;
  //  }
  //  },[currentIndex])
   

  //  useEffect(()=>{
  //   return()=>{
  //     audioRef.current.pause();
  //     clearInterval(intervalRef.current);
  //   };
  //  },[])


  //  const handleNext = ()=>{
  //   if(currentIndex<total.length-1){
  //     setCurrentIndex(currentIndex+1);
  //   }
  //   else{
  //     setCurrentIndex(0);
  //   }
  //  };
   
  //  const handlePrev = ()=>{
  //   if(currentIndex -1<0){
  //     setCurrentIndex(currentIndex-1);
  //   }
  //   else{
  //     setCurrentIndex(currentIndex-1);
  //   }
  //  }

   const addZero=(n)=>{
    return n>9?""+n:"0"+n;
   };

  const artists=[]
  if(currentTracks!==undefined ){
     currentTracks.artists.map((artist)=> artists.push(artist.name));
  }
  
  

useEffect(()=>{
  if(artists){
  console.log("artist",artists);
  }
 },[artists]
)

  return (
   <div className="PlayerBody flex">
    <div className="playerLeftBody">
   {currentTracks&& <ProgressCircle
          percentage={currentPercecntage}
          isPlaying={true}
          image={currentTracks?.images[0]?.url}
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
          <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
          <WaveAnimation isPlaying={true} />
          <p className="duration">0.30</p>
        </div>


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