import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
// import CriarEvento from "./pages/CriarEvento";
import Organizadores from "./pages/Organizadores";
import Ingressos from "./pages/Ingresso";
import CriarEvento from "./pages/CriarEvento";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/organizador" element={<Organizadores />} />

          <Route path="/Eventos" element={<Eventos />} />

          <Route path="/Ingresso" element={<Ingressos />} />

          <Route path="/CriarEvento" element={<CriarEvento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
