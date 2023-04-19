import Imagenes from './Imagenes'
import './Hoteles'
export const Estructura = () => {
    return (
        <>
            <br />
            <br />
            <div className="card text-bg-dark">
                <img src={Imagenes.img4} class="card-img" />
                <div className="card-img-overlay">
                </div>
                <div className='container'>
                    {/* <div>
                        <Hoteles />
                    </div>  */}
                </div>
            </div>
        </>
    )
}
