import React, { useEffect, useState } from 'react'
import  '../../Styles/Player.css'
import APIkit from '../../Share/Spotify';
import { useLocation, useParams } from 'react-router-dom'
import SongCard from '../../Components/SongCard/SongCard';
import Queue from '../../Components/Queue/Queue';
import AudioPlayer from '../../Components/Audio/AudioPlayer';


const Player = () => {
  const location = useLocation();
  const params = useParams();
  const [tracks, setTracks] = useState([]);
  const [currentTracks, setCurrentTracks] = useState([]);
  const[ currentIndex, setCurrentIndex]= useState(0);

  useEffect(()=>{
    const fetchtraks =async()=>{
   try {
    const response= await APIkit.get(`playlists/${params.id}/tracks`);
    // console.log(response.data.items[0].track);
   if (response!==undefined) {
    setTracks(response.data?.items)
    setCurrentTracks(response.data?.items[0]?.track)
   }
   } catch (error) {
    console.log(error);
    
   }

    }
    fetchtraks()
  //  console.log(params.id);
  },[params.id])
  

  useEffect(()=>{
    setCurrentTracks(tracks[currentIndex]?.track);
  },[currentIndex,tracks])

  return (
    <div className='screenConatiner flex'>
      <div className="leftPlayerBody">
      {currentTracks&&  <AudioPlayer currentTracks={currentTracks?.album}  isPlaying={true} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} total={tracks} />}
      </div>
      <div className="rightPlayerBody">
      {currentTracks&&<SongCard album={currentTracks.album}/>}
     {tracks&& <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />}
      </div>
    </div>
  )
}

export default Player