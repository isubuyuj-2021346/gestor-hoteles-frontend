import { useState } from 'react'
// import '../src/assets/css/App.css'
import { Navbar } from './components/Navbar'
import { Estructura } from './components/Estructura'
import { Login } from './Login'
import { logout } from './logout'
import { Usuarios } from './Usuarios'
import { Hotel } from './components/Hotel'
// import { Usuario} from './Usuario'

function App() {
  

  return (
    <>
      {/* <div className='L1'>
        <div >
          <Navbar />
        </div>
        
        <div><Estructura /></div>
        

      </div> */}
      {/* <div className='L1'>
        
         <div><Login/> </div> 
        <Navbar />
        <div><Hotel/> </div>

      </div> */}
      {/* <div className='L1'>
        
        <div> 
          <logout/>
        </div>
        


      </div> */}
      {/* <div className='L1'>
        
        <div>
          <Usuarios/>
        </div>
        

      </div> */}
      
    </>
  )
}

export default App
