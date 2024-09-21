import React from 'react'

const AlbumImage = ({url}) => {
  return (
    <div className="albumImage flex">
    <img src={url} alt="album art" className="albumImageArt" />
    <div className="albumImageShadow">
      <img src={url} alt="shadow" className="albumImageShadow" />
    </div>
  </div>
  )
}

export default AlbumImage