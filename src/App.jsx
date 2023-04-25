import { useState } from 'react'
import './App.css'
import { Navbar } from './componets/Navbar'
import { Estructura } from './componets/Estructura'
// import { Usuario} from './Usuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='L1'>
        <div >
          <Navbar />
        </div>
        <div><Estructura /></div>
        {/* <div>
          <Usuario />
        </div> */}

      </div>
    </>
  )
}

export default App
