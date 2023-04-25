import Imagenes from './Imagenes'
import { Hoteles } from './Hoteles'
import '../App.css'
import { Usuarios } from './Usuarios'

export const Estructura = () => {
    return (
        <>
            <br />
            <br />
            <div className="container">
                <img src={Imagenes.img11} className="card-img" />
                <div className="card-img-overlay">
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <div>
                    <Hoteles />
                    {/* <Usuarios/> */}
                </div>
            </div>
        </>
    )
}
