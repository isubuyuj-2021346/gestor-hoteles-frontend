import React from 'react'
import Imagenes from './Imagenes'

export const Hotel = () => {
    return (
        <>
            <div className='container-card'>
                <div class="card ">
                    <img src={Imagenes.img10}  alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Tikal Futura</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </>
    )
}
