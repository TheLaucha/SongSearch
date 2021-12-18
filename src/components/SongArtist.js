import React from "react"
import "./SongArtist.css"

const SongArtist = ({ artist }) => {
  return (
    <div className='artistContainer'>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt='artist thumb'></img>
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite || artist.strTwitter}`} target='_blank' rel='noreferrer'>
        Sitio web Oficial
      </a>
      <p>{artist.strBiographyES || artist.strBiographyEN}</p>
    </div>
  )
}

export default SongArtist
