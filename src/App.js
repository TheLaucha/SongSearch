import { useState, useEffect } from "react"
import "./App.css"
import SearchForm from "./components/SearchForm"
import SongDetails from "./components/SongDetails"
import Loader from "./components/Loader"
import { helpHttp } from "./helpers/helpHttp.js"
import Examples from "./components/Examples"

function App() {
  const [search, setSearch] = useState(null)
  const [bio, setBio] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return

    const fetchData = async () => {
      const { artist, song } = search

      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ])

      console.log(artistRes)

      setBio(artistRes)
      setLyric(songRes)
      setLoading(false)
    }

    fetchData()
  }, [search])

  const handleSearch = (form) => {
    setSearch(form)
  }

  return (
    <div className='App'>
      <h2>SongSearch</h2>
      <SearchForm handleSearch={handleSearch}></SearchForm>
      <Examples handleSearch={handleSearch}></Examples>
      {loading && <Loader></Loader>}
      {search && !loading && <SongDetails bio={bio} lyric={lyric} search={search}></SongDetails>}
    </div>
  )
}

export default App
