import { React } from 'react'
import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'
// import { OtherCatImage } from './Components/OtherCatImage'
import './Styles/App.css'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
<>
  <main>
  <h1>Facts Result</h1>
  <button onClick={handleClick}>Reload Fact</button>
  <p>{fact}</p>

    {imageURL
      ? (
          <img
            src={imageURL}
            alt={'Image rendered with three words of de fact'}
          />
        )
      : null}
  </main>
</>
  )
}
