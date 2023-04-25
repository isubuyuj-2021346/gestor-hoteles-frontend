import '../App.css'

export const Usuarios = () => {
  return (
    <>
      <div>
        <div id="datos_personales">
          <div class="circulo">
            <img src={Imagenes.img11} title="Isai Subuyuj" />
          </div>

          <p class="titulo1">Jose Brito</p>
          <hr class="separador_corto" />
          <p class="subtitulo1">curriculum vitae</p>

          <div class="datos_personales">
            <table>
              <tbody>
                <tr>
                  <th>N</th>
                  <td>José Francisco<br/>Brito Hernández</td>
                </tr>
                <tr>
                  <th>T</th>
                  <td>669 446 230</td>
                </tr>
                <tr>
                  <th>E</th>
                  <td><a href="url">jose@britooo.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr class="separador_corto" />
          <p class="comentario">«¡Hola!»</p>
          <p class="texto_normal_centrado">Mi nombre es Jose Brito y soy diseñador gráfico. 
          Actualmente soy autónomo y ofrezco mis servicios a empresas y/o profesionales. Si 
          quieres conocerme un poco más, no dejes de visitar mis perfiles en las redes sociales:</p>
          <br/>

            
            <div class="social">
              <span class="twitter_btn">
                <a href="https://twitter.com/dgbritooo" target="_blank">
                  <img src="https://i.imgur.com/aauGajb.png" title="Twitter" />
                </a>
              </span>
              <span class="facebook_btn">
                <a href="https://www.facebook.com/djbtenerife" target="_blank">
                  <img src="https://i.imgur.com/2rFb8Nu.png" title="Facebook" />
                </a>
              </span>
              <span class="behance_btn">
                <a href="https://www.behance.net/dgbritooo" target="_blank">
                  <img src="http://pruebas.britooo.com/Curso-CSS/logoBehance.png" title="Behance" />
                </a>
              </span>
            </div>

        </div>

        <div class="contenedor_flex">

          {/* información */}

          <div class="columna_datos" style="order:2">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_book.svg" class="icono" alt="Formación" />
            <p class="titulo2">Formación</p>
            <hr class="separador_largo" />
            <table class="tablas">
              <tbody>
                <tr>
                  <th>1994</th>
                  <td>Auxiliar Administrativo</td>
                  <td class="texto_cursiva">IES Salud Alto</td>
                </tr>
                <tr>
                  <th>1999</th>
                  <td>Técnico de Informática de Gestión</td>
                  <td class="texto_cursiva">IES César Manrique</td>
                </tr>
                <tr>
                  <th>2003</th>
                  <td>Artefinalista de Diseño Gráfico</td>
                  <td class="texto_cursiva">IES Fernando Estévez</td>
                </tr>
              </tbody>
            </table>
            
          </div>

          

          <div class="columna_datos" style="order:3">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_book_alt.svg" class="icono" alt="Formación Complementaria" />
            <p class="titulo2">Formación Complementaria</p>
            <hr class="separador_largo" />
            <table class="tablas">
              <tbody>
                <tr>
                  <th>Posproducción de Fotografía Publicitaria</th>
                  <td class="texto_cursiva">Víctor Llorente</td>
                </tr>
                <tr>
                  <th>Diseño Editorial</th>
                  <td class="texto_cursiva">Pedro Pan</td>
                </tr>
                <tr>
                  <th>Imagen Corporativa</th>
                  <td class="texto_cursiva">Vasava</td>
                </tr>
                <tr>
                  <th>Diseño Gráfico y Tipografía</th>
                  <td class="texto_cursiva">Marc Catalá</td>
                </tr>
                <tr>
                  <th>El arte del retoque digital</th>
                  <td class="texto_cursiva">Omar Josef</td>
                </tr>
                <tr>
                  <th>Fotografía Digital</th>
                  <td class="texto_cursiva">José María Mellado</td>
                </tr>
              </tbody>
            </table>
            
          </div>

          

          <div class="columna_datos" style="order:4">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_briefcase_alt.svg" class="icono" alt="Experiencia Laboral" />
            <p class="titulo2">Experiencia Laboral</p>
            <hr class="separador_largo" />
            <table class="tablas">
              <tbody>
                <tr>
                  <th>3 a.</th>
                  <td>Producciones Net S.L.</td>
                  <td class="texto_cursiva">Diseño Gráfico</td>
                </tr>
                <tr>
                  <th>6 m.</th>
                  <td>BEEP Informática</td>
                  <td class="texto_cursiva">Servicio Técnico</td>
                </tr>
                <tr>
                  <th>8 a.</th>
                  <td>Litografía Trujillo</td>
                  <td class="texto_cursiva">Diseño / Preimpresión</td>
                </tr>
              </tbody>
            </table>
            
          </div>

          <div class="columna_datos" style="order:5">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_pens_alt.svg" class="icono" alt="Conocimientos" />
            <p class="titulo2">Conocimientos</p>
            <hr class="separador_largo" />
            <table class="tablas">
              <tbody>
                <tr>
                  <td>Diseño Gráfico</td>
                  <td>Branding</td>
                </tr>
                <tr>
                  <td>Diseño Publicitario</td>
                  <td>Web Corporativa</td>
                </tr>
                <tr>
                  <td>Diseño Editorial</td>
                  <td>Retoque Fotográfico</td>
                </tr>
                <tr>
                  <td>Preimpresión</td>
                  <td>Fotomontaje</td>
                </tr>
              </tbody>
            </table>
            
          </div>

          

          <div class="columna_datos" style="order:6">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_desktop.svg" class="icono" alt="Software" />
            <p class="titulo2">Software de Trabajo</p>
            <hr class="separador_largo" />
            <ul class="skills">
              <li>Adobe Illustrator</li>
              <div class="barra_skills">
                <div class="nivel75"></div>
              </div>
              <li>Adobe Photoshop</li>
              <div class="barra_skills">
                <div class="nivel75"></div>
              </div>
              <li>Adobe Lightroom</li>
              <div class="barra_skills">
                <div class="nivel25"></div>
              </div>
              <li>Adobe Indesign</li>
              <div class="barra_skills">
                <div class="nivel50"></div>
              </div>
              <li>Agfa ApogeeX</li>
              <div class="barra_skills">
                <div class="nivel50"></div>
              </div>
            </ul>
          </div>

          

          <div class="columna_datos" style="order:7">
            <img src="http://pruebas.britooo.com/Curso-CSS/icon_info.svg" class="icono" alt="Otros" />
            <p class="titulo2">Otros Datos</p>
            <hr class="separador_largo" />
            <ul class="otros">
              <li>Facilidad para trabajar en grupo</li>
              <li>Inglés básico</li>
              <li>Carné de conducir y vehículo propio</li>
              <li>Disponibilidad inmediata</li>
            </ul>

          </div>
        </div>

      </div>
    </>
  )
}

