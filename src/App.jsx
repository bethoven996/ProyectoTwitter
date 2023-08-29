import "./App.css";
import Inicio from "./Pages/Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalCrearCuenta from "./Pages/Inicio/ModalCrearCuenta";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<ModalCrearCuenta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
