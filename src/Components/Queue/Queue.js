import React from 'react'

const Queue = ({tracks,setCurrentIndex}) => {
  // console.log(tracks);
  // console.log(setcurrentIndex);
  
  return (
    <div className='queueConatiner flex'>
      <div className="queue flex">
        <p className='upNext'>Up Next</p>
        <div className="queueList">
          {
            tracks?.map((track, index) => (
             <div key={index} className="queueItem flex" onClick={()=>{
              setCurrentIndex(index)
             }}>
              <p className='trackName'>{track?.track?.name}</p>
              <p>1.20 min</p>
             </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Queue