import React from "react"
import SongArtist from "./SongArtist"
import SongLyrics from "./SongLyrics"
import Message from "./Message"
import "./SongDetails.css"

const SongDetails = ({ bio, lyric, search }) => {
  if (!lyric || !bio) return null

  return (
    <section className='detailsContainer'>
      {lyric.err || lyric.error || lyric.name === "AbortError" ? (
        <Message msg={`Error: No existe la cancion ${search.song}`} bgColor='#dc3545'></Message>
      ) : (
        <SongLyrics lyrics={lyric.lyrics} title={search.song}></SongLyrics>
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]}></SongArtist>
      ) : (
        <Message
          msg={`Error: no existe el interprete "${search.artist}"`}
          bgColor='#dc3545'
        ></Message>
      )}
    </section>
  )
}

export default SongDetails
