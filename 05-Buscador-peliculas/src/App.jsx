import { React, useCallback, useEffect, useState } from 'react'
import Movie from './Components/Movie'
import useMovies from './Hooks/useMovies'
import { useSearch } from './Hooks/useSearch'
import debounce from 'just-debounce-it'

export default function App () {
  const [sort, setSort] = useState(false)
  const { error, inputText, updateInput } = useSearch()
  const { mappedMovies, loading, searchMovies } = useMovies({ inputText, isSort: sort })

  const debouncedSearch = useCallback(debounce(({ movieToSearch }) => {
    searchMovies({ inputText: movieToSearch })
  }, 300), [])

  const handleSubmit = (e) => {
    e.preventDefault()

    searchMovies({ inputText })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  useEffect(() => {
    debouncedSearch({ movieToSearch: inputText })
  }, [inputText])

  return (
      <main>
        <header>
          <h1>Prueba tecnica</h1>
          <p style={{
            textAlign: 'center'
          }}>
            Buscador de peliculas
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <input type="text" value={inputText} placeholder="Avengers, Star Wars, etc..." onChange={updateInput}/>
          <button type="submit">Buscar</button>
          <label >sort: </label>
          <input type="checkbox" name="sort" onChange={handleSort} checked={sort}/>
        </form>

        {loading
          ? <p className='loading'>Loading...</p>
          : <Movie mappedMovie={mappedMovies} error={error} />
        }
      </main>
  )
}
