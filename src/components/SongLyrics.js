import React from "react"
import "./SongLyrics.css"

const SongLyrics = ({ lyrics, title }) => {
  return (
    <div className='lyricsContainer'>
      <h3>{title}</h3>
      <p>{lyrics}</p>
    </div>
  )
}

export default SongLyrics
