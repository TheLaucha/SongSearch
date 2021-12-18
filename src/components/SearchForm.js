import React, { useState } from "react"
import "./SearchForm.css"

const initialForm = {
  artist: "",
  song: "",
}

const SearchForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.artist || !form.song) {
      alert("Faltan datos")
      return
    }

    handleSearch(form)

    handleReset()
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleReset = () => {
    setForm(initialForm)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='Form'>
        <input
          type='text'
          name='artist'
          placeholder='Nombre del artista'
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type='text'
          name='song'
          placeholder='Nombre de la cancion'
          onChange={handleChange}
          value={form.song}
        ></input>
        <button type='submit'>Buscar</button>
      </form>
    </>
  )
}

export default SearchForm
