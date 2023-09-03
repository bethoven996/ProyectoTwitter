import { useContext, useState } from "react";
import "./Inicio.css";
import ModalInicioSesion from "./ModalInicioSesion";
import { Link } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthContext } from "../../AuthContext";
function Inicio() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="ContenedorPrincipal">
        <div className="ContenedorPajaro">
          <img
            className="IMGLOGO"
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1692797716/twitter_bird_400x400_mnh7dd.png"
            alt=""
          />
        </div>
        <div className="ContenedorSpanYBotones">
          <div className="ContenedorSpan">
            <h2>Lo que esta pasando ahora </h2>
            <h4>Únete Hoy</h4>
          </div>
          <div className="ContenedorBtns">
            <button>
              Iniciar Sesion con Google
              <GoogleIcon
                sx={{ marginLeft: "10px" }}
                fontSize="medium"
                color="primary"
              />
            </button>
            <button style={{ backgroundColor: "black", color: "white" }}>
              Registrarse Con Apple
              <AppleIcon
                sx={{ marginLeft: "15px", marginTop: "-5px" }}
                fontSize="medium"
                color="white"
              />
            </button>

            <h5>o</h5>
            <Link to="/Login">
              <button
                style={{
                  backgroundColor: "rgb(67, 94, 248)",
                  fontFamily: "Georgia",
                }}
              >
                Crear Cuenta
              </button>
            </Link>
            <h6>
              Al registrarte, aceptas los Términos de servicio y la Política de
              privacidad, incluida la política de Uso de Cookies.
            </h6>
            <div className="ContenedorCuenta">
              <h3>¿Ya tienes una cuenta?</h3>

              <button
                onClick={handleShow}
                style={{
                  color: "blue",
                  fontFamily: "Georgia",
                }}
              >
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <li>Información</li>
        <li>Centro de Ayuda </li>
        <li>Política de Privacidad </li>
        <li>Condiciones de Servicio</li>
        <li>Información de anuncios</li>
        <li>Política de cookies</li>
        <li>Accesibilidad</li>
        <li>Blog</li>
        <li>Estado</li>
      </footer>
      <ModalInicioSesion
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}

export default Inicio;
