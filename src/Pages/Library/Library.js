import React, { useState, useEffect } from 'react';
import '../../Styles/Library.css';
import { AiFillPlayCircle } from "react-icons/ai";
import APIkit from '../../Share/Spotify';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [playLists, setPlayLists] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await APIkit.get('me/playlists');
        // console.log(response.data.items);
        // console.log("for image",response.data.items.id);
        setPlayLists(response.data.items);
      } catch (error) {
        // console.error('Error fetching playlists:', error);
        setError('Failed to load playlists. Please try again later.');
      }
    };

    fetchPlaylists(); 
  }, []); 
 

  const navigate = useNavigate();
  const playPlaylist = (id)=>{
    // console.log("hlo",id);
    navigate(`/player/${id}`);
  }


  return (
    <div className='screenConatiner'>
      <div className="libraryBody">
        {playLists && playLists.map((playlist, index) => (
          <div key={index} className='libraryPlaylist' onClick={()=> playPlaylist(playlist.id)}>
            <img className='playlistImg' src={playlist.images[0].url} alt={playlist.name} />
            <p className='playlistTitle'>{playlist.name}</p>
            <p className='playlistSubtitle'>{playlist.tracks.total} Songs</p>
            <div className="playlistFade">
              <IconContext.Provider value={{size:"50px", color:"#E99D72"}}>
              <AiFillPlayCircle/>
              </IconContext.Provider>
            </div>
          </div>
        ))}

      </div>
      </div>
   

  )
}

export default Library
