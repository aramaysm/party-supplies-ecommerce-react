import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Landing_Page } from './Components/Landing page/Landing_Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing_Page />
    </div>
  )
}

export default App
