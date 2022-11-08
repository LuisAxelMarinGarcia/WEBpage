

import './assets/css/fontawesome.css'
import './assets/css/templatemo-woox-travel.css'
import './assets/css/owl.css'
import './assets/css/bootstrap.min.css'
import img1 from './assets/images/about-left-image.jpg'



function AcercaCuerpo() {

  return (
  
    <div class="more-about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="left-image">
            <img src={img1} alt=""/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>¡Descubre más sobre nosotros!</h2>
            <p>En Papelería buscamos los artículos de mejor calidad para usted y toda su familia. Contamos con una amplia gama de artículos para que nunca les falte nada.</p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="info-item">
                <h4>150.640+</h4>
                <span>Clientes al año</span>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-item">
                <h4>175.000+</h4>
                <span>Productos disponibles</span>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="info-item">
                <div class="row">
                  <div class="col-lg-6">
                    <h4>100</h4>
                    <span>Sucursales distintas</span>
                  </div>
                  <div class="col-lg-6">
                    <h4>500+</h4>
                    <span>Colaboradores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Garantizamos que nuestros productos son de la mas alta calidad y si para los 3 días no está satisfecho le devolvemos su dinero.</p>
          <div class="main-button">
            <a href="reservation.html">Descubre nuestros productos</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default AcercaCuerpo
