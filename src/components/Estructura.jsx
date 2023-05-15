import Imagenes from './Imagenes'
import { Hoteles } from './Hoteles'
// import '../App.css'
import { Usuarios } from '../Usuarios'
import { Somos } from './Somos'

export const Estructura = () => {
    return (
        <>
            
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
