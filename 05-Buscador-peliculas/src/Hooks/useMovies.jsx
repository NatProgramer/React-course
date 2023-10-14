import { useState, useRef, useMemo, useCallback } from 'react'
import { movies } from '../Services/movies'

export default function useMovies ({ inputText, isSort }) {
  const [moviesList, setMoviesList] = useState([])
  const [loading, setLoading] = useState(false)
  const previousMovie = useRef(inputText)

  const searchMovies = useCallback(async ({ inputText }) => {
    if (inputText === previousMovie.current) return

    try {
      setLoading(true)
      previousMovie.current = inputText
      const { mappedMovies } = await movies({ inputText })
      setMoviesList(mappedMovies)
    } catch (err) {
      const actuallyError = 'Error loading movies'
      throw new Error(actuallyError)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    try {
      return isSort
        ? [...moviesList].sort((a, b) => a.title.localeCompare(b.title))
        : moviesList
    } catch (err) {
      const actuallyError = 'Error sorting movies'
      throw new Error(actuallyError)
    }
  }
  , [isSort, moviesList])

  return { mappedMovies: sortedMovies, loading, searchMovies }
}
