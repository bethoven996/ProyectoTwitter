import "./App.css";
import Inicio from "./Pages/Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalCrearCuenta from "./Pages/Inicio/ModalCrearCuenta";
import HomeContainer from "./Home/HomeContainer";
import AutenticacionUsuarios from "./AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <AutenticacionUsuarios>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Login" element={<ModalCrearCuenta />} />
            <Route path="/Home" element={<HomeContainer />} />
          </Routes>
        </AutenticacionUsuarios>
      </BrowserRouter>
    </>
  );
}

export default App;
