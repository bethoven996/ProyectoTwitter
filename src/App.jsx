import "./App.css";
import Inicio from "./Pages/Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalCrearCuenta from "./Pages/Inicio/ModalCrearCuenta";
import HomeContainer from "./Home/HomeContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<ModalCrearCuenta />} />
          <Route path="/Home" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
