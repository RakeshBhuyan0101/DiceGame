import { useState } from 'react'

import './App.css'
import StartGame from './components/StartGame'
import Gameplay from './components/Gameplay'

function App() {
  const [isGameStarted, setisGameStarted] = useState(false)

  function toggleGamePlay () {
    setisGameStarted ( (prev) => !prev )
  }
  return (
    <>

     {
      isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} /> 
     }
    </>
  )
}

export default App
