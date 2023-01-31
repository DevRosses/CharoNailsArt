import bootstrap from "bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../containers/Home"
import Somos from "../containers/Somos"
import Servicios from "../containers/Servicios"
import Salon from "../containers/Salon"
import Reserva from "../containers/Reserva"
import Beneficios from "../containers/Beneficios"
import Contacto from "../containers/Contacto"
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Home />}></Route>
      <Route exact path="/Somos" element= {<Somos />}></Route>
      <Route exact path="/Servicios" element= {<Servicios />}></Route>
      <Route exact path="/Salon" element= {<Salon />}></Route>
      <Route exact path="/Reserva" element= {<Reserva />}></Route>
      <Route exact path="/Beneficios" element= {<Beneficios />}></Route>
      <Route exact path="/Contacto" element= {<Contacto />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
