import Imagenes from './Imagenes'
import { Hoteles } from './Hoteles'
// import '../App.css'
import { Somos } from './Somos'
import { Navbar } from './Navbar'

export const Estructura = () => {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div >
                <img src={Imagenes.img11} className="card-img" />
                <div className="card-img-overlay">
                </div>

            </div>
            <br />
            <br />
            <br />
            <div>
                <div>
                    <Somos />
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <Hoteles />
                    {/* <Usuarios/> */}
                </div>
            </div>
        </>
    )
}
