import './Form.css'
function Email(props) {
  return (  <div class="form-row">
  <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Correo electrónico"/>
</div>);
}
function Password(props) {
  return (  <div class="form-row">
  <input type="password" name="password" id="password" class="input-text" placeholder="Contraseña"/>
</div>);
}
function TyC(props) {
  return ( 
  <div class="form-checkbox">
    <label class="container"><p>Acepto <a href="#" class="text">los terminos y condiciones</a> del sitio.</p>
        <input type="checkbox" name="checkbox"/>
        <span class="checkmark"></span>
    </label>
  </div>
  );
}
function Confirmar(props) {
  return (<div class="form-row-last">
  <input type="submit" name="Registrarse" class="register" value="Registrarse"/>
</div>);
}
function Derecha(props) {
  return (				<div class="form-right">
  <center><h2>Iniciar Sesión</h2></center>
  <Email email="email"/>
  <Password password="password"/>
  <TyC terminos="condiciones"/>
  <center><Confirmar confirmar="confirmar"/></center>
</div>);
}

function Form() {

  return (
    <div className="App">
      	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
      <Derecha derecha="derecha"/>
			</form>
		</div>
	</div>
    </div>
  )
}

export default Form
