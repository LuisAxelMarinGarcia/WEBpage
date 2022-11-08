

import './assets/css/fontawesome.css'
import './assets/css/templatemo-woox-travel.css'
import './assets/css/owl.css'
import './assets/css/bootstrap.min.css'

function BodyUp() {
  return     (    <div class="second-page-heading">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2>Haga su reservación</h2>
        <p>Garantizamos que nuestros productos son de la mas alta calidad y si para los 3 días no está satisfecho le devolvemos su dinero.</p>
        <div class="main-button"><a href="acerca.html">Descubre mas</a></div>
      </div>
    </div>
  </div>
</div>);
}

function BodyMid() {
  return     (      <div class="more-info reservation-info">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <div class="info-item">
          <h4>¡Llámenos!</h4>
          <a href="#">+52 961 832 6437 (0)</a>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="info-item">
          <h4>Contact Us via Email</h4>
          <a href="#">Papeleria@gmail.com</a>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="info-item">
          <h4>Visita nuestras oficinas</h4>
          <a href="#">CHUAHUTEMOC NO. 207 Int. SN, MONTERREY CENTRO, 64000</a>
        </div>
      </div>
    </div>
  </div>
</div>);
}

function BodyDown() {
  return     (  <div class="reservation-form">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
      </div>
      <div class="col-lg-12">
        <form id="reservation-form" name="gs" method="submit" role="search" action="#">
          <div class="row">
            <div class="col-lg-12">
              <h4>Haga su pedido a través de este formulario</h4>
            </div>
            <div class="col-lg-6">
                <fieldset>
                    <label for="Name" class="form-label">Nombre</label>
                    <input type="text" name="Name" class="Name" placeholder="Ej. Teresa Molina  " autocomplete="on" required/>
                </fieldset>
            </div>
            <div class="col-lg-6">
              <fieldset>
                  <label for="Number" class="form-label">Número de teléfono</label>
                  <input type="text" name="Number" class="Number" placeholder="Ej. +xxx xxx xxx" autocomplete="on" required/>
              </fieldset>
            </div>
            <center><div class="col-lg-6">
                <fieldset>
                    <label for="Name" class="form-label">Dirección</label>
                    <input type="text" name="Name" class="Name" placeholder="Ej. Av. 123, apto. 1234" autocomplete="on" required/>
                </fieldset>
            </div></center>
            <div class="col-lg-12">
                <fieldset>
                    <label for="chooseDestination" class="form-label">Ubicación</label>
                    <select name="Destination" class="form-select" aria-label="Default select example" id="chooseCategory" onChange="this.form.click()">
                    <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California Sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Durango">Durango</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="México">México</option>
                        <option value="Michoacán">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Querétaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinaloa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                    </select>
                </fieldset>
            </div>
            <div class="col-lg-12">                        
                <fieldset>
                    <button class="main-button">Haga su pedido ahora</button>
                </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>);
}



function ReservaBody() {

  return (
  <div>
      <BodyUp bodyup="bodyup"/>
<BodyMid bodymid="bodymid"/>
<BodyDown bodydown="bodydown"/>

</div>


  )
}


export default ReservaBody
