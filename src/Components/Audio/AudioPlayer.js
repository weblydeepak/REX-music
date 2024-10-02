import React, { useRef, useState, useEffect } from 'react';
import ProgressCircle from './ProgressCircle';
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';
import  '../../Styles/AudioPlayer.css'

const AudioPlayer = ({ currentTracks, currentIndex, setCurrentIndex, total }) => {
  // const audioSrc = total[currentIndex]?.track.preview_url;
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const audioRef = useRef(null);

  // // Play or Pause the audio
  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  // };
  //    // Update progress bar
  // const handleTimeUpdate = () => {
  //   const currentTime = audioRef.current.currentTime;
  //   const duration = audioRef.current.duration;
  //   setProgress((currentTime / duration) * 100);
  // };

  // // Update play state when audio ends
  // const handleAudioEnd = () => {
  //   setIsPlaying(false);
  //   setProgress(0);
  // };

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   audio.addEventListener('timeupdate', handleTimeUpdate);
  //   audio.addEventListener('ended', handleAudioEnd);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     audio.removeEventListener('timeupdate', handleTimeUpdate);
  //     audio.removeEventListener('ended', handleAudioEnd);
  //   };
  // }, []);

  const [isPlaying, setIsPlaying]= useState(true);
  const [trackProgress,setTrackProgress]= useState(0);
  const audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef= useRef(new Audio(total[0]?.track.preview_url));
  const intervalRef = useRef();
  const {duration } = audioRef.current;
  
  const currentpercentage = duration?(trackProgress/duration) *100: 0;

 
   const startTimer = ()=>{
    clearInterval(intervalRef.current)
     intervalRef.current = setInterval(() => {
       if (audioRef.current?.ended) {
         handelNext()
       }
       else{
          setTrackProgress(audioRef.current?.currentTime);      
       }
     }, [500]);
 
   }
   useEffect(()=>{
    if(audioRef.current.src){
      if (isPlaying) {
        audioRef.current.play();
       startTimer();
      }
      else{ 
      if(isPlaying){
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      }
      else{
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      }
      }
    }
   })
    
   const handelNext = ()=>{
     if(currentIndex<total.length-1){
       setCurrentIndex(currentIndex+1);
     }
     else{
       setCurrentIndex(0);
     }
   }
   const handelPre = ()=>{
    if (currentIndex-1<0) {
         setCurrentIndex(total.length-1);
    }
    else{
      setCurrentIndex(currentIndex-1);
    }
   }


const addZero = (n) => {
  return n > 9 ? "" + n : "0" + n;
};


  const artists=[];
  if(currentTracks!==undefined ){
    currentTracks.artists.map((artist)=> artists.push(artist.name));
  }
  
 useEffect(()=>{
    // console.log(trackProgress);

 },[trackProgress])

  return (
  //   <div className="audio-player">
  //   <audio ref={audioRef} src={audioSrc} preload="auto" />
  //   <button onClick={togglePlayPause}>
  //     {isPlaying ? 'Pause' : 'Play'}
  //   </button>
  //   <div className="progress-bar" style={{ width: `${progress}%`, height: '5px', background: 'blue' }}></div>
  // </div>
  <div className="PlayerBody flex">
    <div className="playerLeftBody">
   {currentTracks&& <ProgressCircle
          percentage={currentpercentage}
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
          <audio ref={audioRef} src={audioSrc} preload='auto' ></audio>
        </div>


       {/* <div className="Controler">
        <button onClick={handelPre}>pre</button>
        <button onClick={togglePlayPause}>{isPlaying?'pause':'play'}</button>
        <button onClick={handelNext} >next</button>
       </div> */}

        {/* <div className="conttroler">
          <button onClick={playHandle}>{isPlaying?"play":'pause'}</button>
        </div> */}

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handelNext={handelNext}
        handelPrev={handelPre}
      />
          
      </div>
    </div>
   </div>



);
};

export default AudioPlayer;
