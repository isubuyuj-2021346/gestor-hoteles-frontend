import Imagenes from './Imagenes'
// import '../estilos.css'

export const Hoteles = () => {
  return (
    <>
      <div >

        <div className='container '>
          <div className="card">
            <figure>
              <img src={Imagenes.img5} />
            </figure>
            <div className="contenido-card">
              <h3>Hotel Barcelo</h3>
              <p>Este elegante hotel dispone de piscina exterior, bañera de hidromasaje y spa con gimnasio y sauna.
                El trato amable y el desayuno estuvo muy bueno</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
        </div>
        <div className='container '>
          <div className="card">
            <figure>
              <img src={Imagenes.img6} />
            </figure>
            <div className="contenido-card">
              <h3>Conquistador Hotel y Conference Center</h3>
              <p>El Conquistador Hotel & Conference Center se encuentra a 190 metros de la estación de metro Plaza
                de la República y a 100 metros del centro comercial Plaza Quo.</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
        </div>
        <div class="container-card">


          <div class="card">
            <figure>
              <img
                src={Imagenes.img5} />
            </figure>
            <div className="contenido-card">
              <h3>Hotel Barcelo</h3>
              <p>Este elegante hotel dispone de piscina exterior, bañera de hidromasaje y spa con gimnasio y sauna.
                El trato amable y el desayuno estuvo muy bueno</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
          <div class="card">
            <figure>
              <img src={Imagenes.img6} />
            </figure>
            <div class="contenido-card">
              <h3>Conquistador Hotel y Conference Center</h3>
              <p>El Conquistador Hotel & Conference Center se encuentra a 190 metros de la estación de metro Plaza
                de la República y a 100 metros del centro comercial Plaza Quo.</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
          <div class="card">
            <figure>
              <img
                src={Imagenes.img7} />
            </figure>
            <div class="contenido-card">
              <h3>Hotel Clarion Suites </h3>
              <p>El Clarion Suites Guatemala está ubicado en el popular distrito de Zona Viva y ofrece gimnasio,
                aparcamiento gratuito y suites elegantes con aire acondicionado.</p>
              <a href="#">Leer Más</a>
            </div>
          </div>

        </div>
        <br />
        <br />

        <div class="container-card">

          <div class="card">
            <figure>
              <img
                src={Imagenes.img8} />
            </figure>
            <div class="contenido-card">
              <h3>Hostal Villa Toscana</h3>
              <p>El Hostal Villa Toscana, ideal para turistas locales y extranjeros, misioneros, sin fines de lucro,
                familias y grupos de negocios, se encuentra en la ciudad de Guatemala</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
          <div class="card">
            <figure>
              <img src={Imagenes.img9} />
            </figure>
            <div class="contenido-card">
              <h3>Holiday Inn Guatemala</h3>
              <p>El Holiday Inn está ubicado en el distrito Zona 10 de Guatemala y ofrece WiFi gratuita y piscina
                al aire libre. También alberga un centro de fitness.</p>
              <a href="#">Leer Más</a>
            </div>
          </div>
          <div class="card">
            <figure>
              <img
                src={Imagenes.img10} />
            </figure>
            <div class="contenido-card">
              <h3>Grand Tikal Futura Hotel</h3>
              <p>El Clarion Suites Guatemala está ubicado en el popular distrito de Zona Viva y ofrece gimnasio,
                aparcamiento gratuito y suites elegantes con aire acondicionado.</p>
              <a href="#">Leer Más</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

