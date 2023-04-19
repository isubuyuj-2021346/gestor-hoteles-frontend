import { useState } from 'react'
import './App.css'
import { Navbar } from './componets/Navbar'
import { Estructura } from './componets/Estructura'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div> *
        <div><Estructura /></div>
      </div>
    </>
  )
}

export default App
