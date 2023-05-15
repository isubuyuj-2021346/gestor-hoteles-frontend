import React from 'react'
import styled from 'styled-components'
import { Usuarios } from '../Usuarios'
// import '../App.css'
import Imagenes from './Imagenes'

export const Navbar = () => {
    return (
        <>
            <NavContainer >

                <div>
                    <nav  className="navbar bg-dark bg-body-tertiary fixed-top " data-bs-theme="dark">
                        <div className="container-fluid" >
                            <img src={Imagenes.img2} />
                            <a className="titulo" href="">Royale Hoteles</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body" >
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
                                        <li className="nav-item">
                                            <a className="nav-link"  href="../Usuario">Facturas</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/Usuario">Usuario</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Close</a>
                                        </li>
                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hoteles
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Habitaciones</a></li>
                                                <li><a className="dropdown-item" href="#">Tipo de Evento</a></li>
                                                <li><a className="dropdown-item" href="#">Reservaciones</a></li>

                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
h2 {
    color: white;
    font-weight: 400;
  }
  
  
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
`