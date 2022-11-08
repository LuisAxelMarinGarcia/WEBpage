import img1 from './assets/images/logo.png'

function Header(props) {
    return ( <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="index.html" class="logo">
                        <img src={img1} alt=""/>
                    </a>
                    <ul class="nav">
                        <li><a href="index.html" class="active">Inicio</a></li>
                        <li><a href="acerca.html">Acerca de nosotros</a></li>
                        <li><a href="reserva.html">Reservación</a></li>
                        <li><a href="Login.html">Iniciar Sesión</a></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>);
  }

  export default Header
