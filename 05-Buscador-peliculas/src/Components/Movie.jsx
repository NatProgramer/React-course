import React from 'react'
import Error from './Error'

// eslint-disable-next-line react/prop-types
export default function Movie ({ mappedMovie, error = false }) {
  // eslint-disable-next-line react/prop-types
  const hasMovies = mappedMovie?.length > 0

  return (
    <>
    <ul>
      {

      hasMovies
        /* eslint-disable-next-line react/prop-types */
        ? mappedMovie?.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title}/>
            </li>
          )
        })
        : null

    }
    </ul>
    {
      !hasMovies
        ? <Error error={error} />
        : null
    }
    </>
  )
}
