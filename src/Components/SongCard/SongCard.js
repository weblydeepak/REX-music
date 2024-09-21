import React from 'react'
import '../../Styles/SongCard.css'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
const SongCard = ({album}) => {
  

    // console.log(album?.images[0].url);

    
return (
    <div className='songCardBody '>
        <AlbumImage url={album?.images[0].url}/>
        <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard