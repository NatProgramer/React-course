import { MOVIES_API } from './Constanst'

export async function getMovies (inputText) {
  const fetchMovies = fetch(`${MOVIES_API}&s=${inputText}`)

  const res = (await fetchMovies).json()

  return res
}
