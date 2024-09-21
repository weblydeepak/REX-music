import React, { useEffect } from 'react'

const AlbumInfo = ({album}) => {
  // console.log(album);
  
  const artists=[]
  
  if(album!==undefined ){

     album.artists.forEach((elm)=>{
       artists.push(elm.name)
     })   
       

  }


  // useEffect(()=>{
  //   if(artists){
  //  console.log("artist",artists);
  //   }
    
  // },[artists])
  return (
   <div className='albumInfoCard' >
    <div className="albumNameContainer">
      <div className="titleQueue">
     {album&&<p>{album?.name+"-"+artists?.join(",")}</p>}
     </div>
    </div>
    <div className="albumInfo">
      <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(" , ")} with ${album?.total_tracks} tarak(s)`}</p>
    </div>
    <div className="albumRelease">
      <p>Release Date:{album?.release_date}</p>
    </div>
   </div>
  )
}

export default AlbumInfo