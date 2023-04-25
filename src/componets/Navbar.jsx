import React from 'react'
import styled from 'styled-components'
import '../App.css'
import Imagenes from './Imagenes'

export const Navbar = () => {
    return (
        <>
            <NavContainer >

                <div>
                    <nav  class="navbar bg-body-tertiary fixed-top ">
                        <div class="container-fluid" >
                            <img src={Imagenes.img2} />
                            <a class="titulo" href="#">Royale Hoteles</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body" >
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-2">
                                        <li class="nav-item">
                                            <a class="nav-link"  href="#">Facturas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href=".../src/usuario">Usuario</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Close</a>
                                        </li>
                                        <li class="nav-item dropdown" >
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hoteles
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Habitaciones</a></li>
                                                <li><a class="dropdown-item" href="#">Tipo de Evento</a></li>
                                                <li><a class="dropdown-item" href="#">Reservaciones</a></li>

                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form class="d-flex mt-3" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
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