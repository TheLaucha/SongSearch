import React, { useState, useEffect } from "react"
import "./Examples.css"
import SearchForm from "./SearchForm"

const initialForm = {
  artist: "",
  song: "",
}

const Examples = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (!form.artist || !form.song) return null

    function searchSong(form) {
      handleSearch(form)
    }

    searchSong(form)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form])

  const handleClick = (artist, song) => {
    setForm({ artist: artist, song: song })
  }

  return (
    <div className='examplesContainer'>
      <h3>Algunos ejemplos</h3>
      <div className='examplesBtn'>
        <button onClick={() => handleClick("Billie Eilish", "idontwannabeyouanymore")}>
          Billie Eilish - idontwannabeyouanymore
        </button>
        <button onClick={() => handleClick("The Weeknd", "Blinding Lights")}>
          The Weeknd - Blinding Lights
        </button>
        <button onClick={() => handleClick("Bad Bunny", "DÁKITI")}>Bad Bunny - DÁKITI</button>
      </div>
    </div>
  )
}

export default Examples
