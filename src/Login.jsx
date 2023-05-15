import React from 'react'
import '../src/assets/css/index.css'


export const Login = () => {
    return (
        <>
            {/* <div>
                <div classNameName="login-page">
                    <div classNameName="form">
                        <form classNameName="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p classNameName="message">Already registered? <a href="#">Sign In</a></p>
                        </form>
                        <form classNameName="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p classNameName="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div> */}
            
            
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
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        
                        <div class="overlay-panel overlay-right">
                            <h1>¡Bienvenido!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}
