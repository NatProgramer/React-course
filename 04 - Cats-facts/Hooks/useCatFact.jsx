import { useEffect, useState } from 'react'
import { fetchRamdomFactsAPI } from '../Utils/Functions'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    fetchRamdomFactsAPI().then(setFact)
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
