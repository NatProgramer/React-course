import { getMovies } from '../Utils/Functions'

export const movies = async ({ inputText }) => {
  if (inputText?.lenght <= 0) return null

  const json = await getMovies(inputText)

  const mappedMovies = json.Search?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { mappedMovies }
}
