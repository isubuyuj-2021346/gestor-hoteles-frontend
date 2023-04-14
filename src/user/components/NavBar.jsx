

export const NavBar = () => {
    return (
        <>

            <div className="container">

                <nav id="sidebar">
                    <div class="sidebar_blog_1">
                        <div class="sidebar-header">
                        </div>
                        <div class="sidebar_user_info">
                            <div class="icon_setting"></div>
                            <div class="user_profle_side">
                                <div class="user_img"><img class="img-responsive" src="./assets/img/foto.jpg" alt="#" /></div>
                                <div class="user_info">
                                    <h6>Isai Subuyuj</h6>
                                    <p><span class="online_animation"></span> Online</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar_blog_2">
                        <h4>General</h4>
                        <ul class="list-unstyled components">
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                            <li><a href="./usuario.jsx"><i class="fa fa-clock-o orange_color"></i> <span>Perfil</span></a></li>
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                            <li><a href="./hotel.jsx"><i class="fa fa-clock-o orange_color"></i> <span>Hotel</span></a></li>
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                            <li><a href="./factura.jsx"><i class="fa fa-clock-o orange_color"></i> <span>Factura</span></a></li>
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                            <li><a href="./habitaciones.jsx"><i class="fa fa-clock-o orange_color"></i> <span>Habitaciones</span></a></li>
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                            <li><a href="./index.html"><i class="fa fa-clock-o orange_color"></i> <span>Regresar</span></a></li>
                            <li><a ><i class="fa fa-clock-o orange_color"></i> <span>------</span></a></li>
                        </ul>
                    </div>
                </nav>

                <div id="content">
                    <div class="topbar">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="full">
                                <button type="button" id="sidebarCollapse" class="sidebar_toggle"><img class="icono" src="./assets/img/iconop.png" alt="..."></img></button>
                                <div class="logo_section">
                                    <a href="index.html"><img class="img-responsive" src="./assets/img/images/tituloo.jpg" alt="#" /></a>
                                </div>
                                <div class="right_topbar">
                                    <div class="icon_info">

                                        <ul class="user_profile_dd">
                                            <li>
                                                <a class="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src=".../public/kinalL.png" alt="#" /><span class="name_user">Usuario</span></a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="./perfil.html">Mi perfil  </a>
                                                    <a class="dropdown-item" href="./index.html"><span>Salir</span> <i class="fa fa-sign-out"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
