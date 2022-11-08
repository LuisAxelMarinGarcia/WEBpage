import img1 from './assets/images/country-01.jpg'
import img2 from './assets/images/country-02.jpg'
import img3 from './assets/images/country-03.jpg'

  function Body() {
    return     (
  <div class="visit-country">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="section-heading">
          <h1>Productos destacados</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="items">
            <div class="row">
              <div class="col-lg-12">
                <div class="item">
                  <div class="row">
                    <div class="col-lg-4 col-sm-5">
                      <div class="image">
                        <img src={img1} alt=""/>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-7">
                      <div class="right-content">
                        <h4>Paquete de cuadernos</h4>
                        <span>útiles escolares</span>
                        <div class="main-button">
                          <a href="reserva.html">Buscar más</a>
                        </div>
                        <p>Paquete de cuadernos escolares para uso personal.</p>
                        <ul class="info">
                          <li><i class="fa fa-user"></i> 8.66 Mil People</li>
                          <li><i class="fa fa-globe"></i> 41.290 km2</li>
                          <li><i class="fa fa-home"></i> $1.100.200</li>
                        </ul>
                        <div class="text-button">
                          <a href="reserva.html">¿Necesita ayuda?<i class="fa fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="item">
                  <div class="row">
                    <div class="col-lg-4 col-sm-5">
                      <div class="image">
                        <img src={img2} alt=""/>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-7">
                      <div class="right-content">
                        <h4>Juego geométrico</h4>
                        <span>Útiles escolares</span>
                        <div class="main-button">
                          <a href="reserva.html">Buscar más</a>
                        </div>
                        <p>Juego geométrico para que los niños aprendan matemáticas</p>
                        <ul class="info">
                          <li><i class="fa fa-user"></i> 44.48 Mil People</li>
                          <li><i class="fa fa-globe"></i> 275.400 km2</li>
                          <li><i class="fa fa-home"></i> $946.000</li>
                        </ul>
                        <div class="text-button">
                          <a href="reserva.html">¿Necesita ayuda?<i class="fa fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="item last-item">
                  <div class="row">
                    <div class="col-lg-4 col-sm-5">
                      <div class="image">
                        <img src={img3} alt=""/>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-7">
                      <div class="right-content">
                        <h4>Paquete de plumones</h4>
                        <span>Útiles escolares</span>
                        <div class="main-button">
                          <a href="reserva.html">Buscar más</a>
                        </div>
                        <p>Paquete de plumones útiles para la gente creativa e interesados en el diseño</p>
                        <ul class="info">
                          <li><i class="fa fa-user"></i> 67.41 Mil People</li>
                          <li><i class="fa fa-globe"></i> 551.500 km2</li>
                          <li><i class="fa fa-home"></i> $425.600</li>
                        </ul>
                        <div class="text-button">
                          <a href="reserva.html">¿Necesita ayuda?<i class="fa fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  
  );
  }
  export default Body