import './assets/css/fontawesome.css'
import './assets/css/templatemo-woox-travel.css'
import './assets/css/owl.css'
import './assets/css/bootstrap.min.css'
import Header from './Header'
import Footer from './Footer'
import ReservaBody from './ReservaBody'




function Reserva() {

  return (
    <div className="Reserva">
 <Header header="header"/>
 <ReservaBody reservabody="reservabody"/>
  <Footer footer="footer"/>
    </div>
  )
}


export default Reserva
