import React from 'react'

/* eslint-disable-next-line react/prop-types */
export default function Error ({ error = false }) {
  return (
    <>
      <h2>{!error ? 'Do not found movies' : 'An error has occurred'}</h2>
      <p style={{ color: '#dd4444' }}>{error}</p>
    </>
  )
}
