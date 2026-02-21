import { useState } from 'react'
import genshinLogo from './assets/genshin_logo.png'
import './App.css'

import MainBody from './MainBody.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img className="site-logo" src={genshinLogo} alt="Genshin Impact Logo" />
        <h1 className="site-title">
          <a href="/" className="site-title__link">Genshin Impact AI Team Builder</a>
        </h1>
      </header>
      <MainBody></MainBody>
    </>
  )
}

export default App
