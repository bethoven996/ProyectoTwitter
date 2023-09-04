import "./Home.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonIcon from "@mui/icons-material/Person";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PublicIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { useAuth } from "../AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { displayName } = auth.usuario;
  const [mensajes, setMensajes] = useState([]);
  const [posteo, setPosteo] = useState("");
  const Posteados = () => {
    if (posteo.trim() !== "") {
      setMensajes([...mensajes, posteo]);
      setPosteo("");
    }
  };
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div className="ContenedorDOM">
        <div className="ContenedorSideBar">
          <div className="ContenedorIMG">
            <img
              src="https://res.cloudinary.com/do9rcgcca/image/upload/v1692797716/twitter_bird_400x400_mnh7dd.png"
              alt=""
            />
          </div>
          <div className="ContenedorIcons">
            <div className="contenedorOpcion">
              <HomeIcon fontSize="large" />
              <span>Inicio</span>
            </div>
            <div>
              <SearchIcon fontSize="large" />
              <span>Explorar</span>
            </div>
            <div>
              <NotificationsIcon fontSize="large" />
              <span>Notificaciones</span>
            </div>
            <div>
              <AttachEmailIcon fontSize="large" />
              <span>Mensajes</span>
            </div>
            <div>
              <ReceiptLongIcon fontSize="large" />
              <span>Listas</span>
            </div>
            <div>
              <BugReportIcon fontSize="large" />
              <span>Verificado</span>
            </div>
            <div>
              <PersonIcon fontSize="large" />
              <span>Perfil</span>
            </div>
            <div>
              <MenuOpenOutlinedIcon fontSize="large" />
              <span>Mas Opciones</span>
            </div>
          </div>
          <div className="contenedorbtn">
            <button>
              <ModeEditOutlineOutlinedIcon fontSize="large" />
              <span>Birdear</span>
            </button>
          </div>
          <Button onClick={() => handleLogout()}>Cerrar Sesion</Button>
        </div>
        <div className="ContenedorHome">
          <div>
            <h4>Inicio</h4>
          </div>
          <div className="ContenedorOpcionales">
            <div>
              <p>Para ti</p>
            </div>
            <div>
              <p>Siguiendo</p>
            </div>
          </div>
          <div className="ContenedorTextTarea">
            <div className="FotoDePerfil">
              <img src="https://res.cloudinary.com/do9rcgcca/image/upload/v1693429043/kpobwhwz3otsm46ut1ey.jpg" />
              <h6>{displayName}</h6>
            </div>
            <textarea
              className="textTarea"
              name=""
              placeholder="¿Que Esta Pasando?"
              cols="30"
              rows="5"
              onChange={(e) => setPosteo(e.target.value)}
            ></textarea>
            <div className="contenedorMundo">
              <PublicIcon color="primary" fontSize="small" />
              <span>cualquier persona puede responder</span>
            </div>
          </div>
          <div>
            <div className="contenedorIconosButton">
              <div>
                <ImageIcon
                  className="iconos"
                  fontSize="small"
                  color="primary"
                />
              </div>
              <GifBoxIcon className="iconos" fontSize="small" color="primary" />
              <AssessmentIcon
                className="iconos"
                fontSize="small"
                color="primary"
              />
              <SentimentVerySatisfiedIcon
                className="iconos"
                fontSize="small"
                color="primary"
              />
              <FmdGoodIcon
                className="iconos"
                fontSize="small"
                color="primary"
              />
              <button onClick={() => Posteados()} className="btntwittear">
                <ModeEditOutlineOutlinedIcon fontSize="medium" />
                <span>Birdear</span>
              </button>
            </div>
            <div className="ContenedorSubcripcion">
              <h3>
                Es posible que te estés perdiendo la oportunidad de acceder a
                las cuotas de ingresos por anuncios en X.
              </h3>
              <span>
                Si eres elegible, debes tener una suscripción a X Premium para
                recibir una cuota de ingresos por anuncios.
              </span>
              <span>Regístrate en X Premium para obtener acceso.</span>
              <button>Suscribite hoy</button>
            </div>
            <div className="MensajesContainer">
              {mensajes.map((mensaje, index) => (
                <div key={index} className="Mensaje">
                  {mensaje}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ContenedorSearch">
          <div className="ContInput">
            <i>
              <SearchIcon fontSize="medium" />
            </i>
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="ContTendencias">
            <h4 className="TituloTendencias">Qué está pasando</h4>
            <div className="Tendencia">
              <div className="contenedorDeTendencias">
                <span>Tendencia En Argentina</span>
                <h6 style={{ paddingLeft: "5px" }}>San Lorenzo</h6>
                <span>44,3 post</span>
              </div>
              <i>
                <LinearScaleIcon fontSize="small" />
              </i>
            </div>
            <div className="Tendencia">
              <div className="contenedorDeTendencias">
                <span>Tendencia En Deportes</span>
                <h6 style={{ paddingLeft: "5px" }}>Rafael Nadal</h6>
                <span>45,3 post</span>
              </div>
              <i>
                <LinearScaleIcon fontSize="small" />
              </i>
            </div>
            <div className="Tendencia">
              <div className="contenedorDeTendencias">
                <span>Tendencia En Musica</span>
                <h6 style={{ paddingLeft: "5px" }}>Bon Jovi</h6>
                <span>454,3 post</span>
              </div>
              <i>
                <LinearScaleIcon fontSize="small" />
              </i>
            </div>
            <div className="Tendencia">
              <div className="contenedorDeTendencias">
                <span>Tendencia En Cine</span>
                <h6 style={{ paddingLeft: "5px" }}>Star Wars</h6>
                <span>874,3 post</span>
              </div>
              <i>
                <LinearScaleIcon fontSize="small" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
