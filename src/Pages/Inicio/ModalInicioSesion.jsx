import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./ModalCSS.css";

function ModalInicioSesion({ show, setShow, handleClose, handleShow }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="ContenedorIMGyButton">
          <Button
            style={{
              width: "35px",
              height: "35px",
              margin: "3px",
              borderRadius: "20px",
            }}
            onClick={handleClose}
            variant="outline-secondary"
          >
            X
          </Button>

          <img
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1692797716/twitter_bird_400x400_mnh7dd.png"
            alt=""
          />
        </div>
        <h3 className="span">Inicia Sesion en Bird</h3>
        <div className="ContenedorPrincipalModal">
          <Button className="btnGoogleYApple" variant="primary">
            Iniciar Con Google
          </Button>
          <Button className="btnGoogleYApple" variant="dark">
            Iniciar Con Apple
          </Button>
          <Form.Label className="LabelO">O</Form.Label>
          <Form className="Formulario">
            <Form.Group
              as={Row}
              className="Email"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col className="Input" sm="10">
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="Password"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col className="Input" sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
          <Button className="btnSiguiente" variant="dark">
            SIGUIENTE
          </Button>
          <Button className="btnRecuperarPassword" variant="light">
            OLVISTE TU CONTRASEÑA?
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalInicioSesion;
