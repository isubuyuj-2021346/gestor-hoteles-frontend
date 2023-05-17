import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { login } from "../api/ApiLogin";

export const Login = () => {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await login(correo, password);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "Ha iniciado sesión con exito!",
                confirmButtonText: "Ok",
            }).then((r) => {
                if (r.isConfirmed) {
                    window.location.href = "/";
                } else {
                    window.location.href = "/";
                }
            });
        }
    };

    const navigate = useNavigate();

    const handleAdd = () => {
        //console.log('vamonos al login');
        navigate('/Estructura');
    }
    return (
        <>


            <div class="container" id="container">

                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="" class="social"><i class=""></i></a>
                            <a href="" class="social"><i class=""></i></a>
                            <a href="" class="social"><i class=""></i></a>
                        </div>
                        <span>Usa tu cuenta</span>
                        <input type="email" placeholder="Email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">

                        <div class="overlay-panel overlay-right">
                            <h1>¡Bienvenido!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" onClick={handleAdd} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
