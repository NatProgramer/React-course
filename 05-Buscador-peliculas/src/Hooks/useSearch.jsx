import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState(false)
  const isFirstInput = useRef(true)

  const updateInput = (e) => {
    const newInputText = e.target.value
    setInputText(newInputText)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = inputText === ''
      return
    }

    if (inputText.length <= 0) {
      setError("Can't search for a movie with empty text")
      return
    } else if (inputText === ' ') {
      setError('Cannot start with a space')
      return
    } else if (inputText.match(/^\d+$/)) {
      setError("Can't start with a number")
      return
    } else if (inputText.length < 3) {
      setError("Can't search for a movie with less than 3 letters")
      return
    }

    setError(false)
  }, [inputText])

  return { error, inputText, updateInput }
}
