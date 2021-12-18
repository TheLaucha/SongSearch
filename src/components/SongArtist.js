import React from "react"
import "./SongArtist.css"

const SongArtist = ({ artist }) => {
  return (
    <div className='artistContainer'>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt='artist thumb'></img>
      <p>
        <i className='fas fa-calendar-alt'></i>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>
        <i className='fas fa-map-marker-alt'></i>
        {artist.strCountry}
      </p>
      <p>
        <i className='fas fa-guitar'></i>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite || artist.strTwitter}`} target='_blank' rel='noreferrer'>
        <i className='fas fa-link'></i>
        Sitio web Oficial
      </a>
      <p>
        <i className='fas fa-pen'></i>
        {artist.strBiographyES || artist.strBiographyEN}
      </p>
    </div>
  )
}

export default SongArtist
