import React from 'react'

export const logout = () => {
    return (
        <>
            <div class="container" id="container">

                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Usa tu cuenta</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">

                        <div class="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
