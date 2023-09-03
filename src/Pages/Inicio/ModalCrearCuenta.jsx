import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalCuenta.css";
import { Button, TextField } from "@mui/material";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";

function ModalCrearCuenta() {
  const { Contexto, Registro, login, loginWhitGoogle, logout } =
    useContext(AuthContext);
  const [emailRegister, setEmailRegister] = useState("");
  const [PasswordRegister, setPasswordRegister] = useState("");
  const [UsersRegister, setUserRegister] = useState("");
  console.log(emailRegister, PasswordRegister, UsersRegister);
  const handleRegister = (e) => {
    e.preventDefault();
    Registro(emailRegister, PasswordRegister);
  };
  const meses = [
    { label: "Enero", value: "Enero" },
    { label: "Febrero", value: "Febrero" },
    { label: "Marzo", value: "Marzo" },
    { label: "Abril", value: "Abril" },
    { label: "Mayo", value: "Mayo" },
    { label: "Junio", value: "Junio" },
    { label: "Julio", value: "Julio" },
    { label: "Agosto", value: "Agosto" },
    { label: "Septiembre", value: "Septiembre" },
    { label: "Octubre", value: "Octubre" },
    { label: "Noviembre", value: "Noviembre" },
    { label: "Diciembre", value: "Diciembre" },
  ];
  const dias = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
    { label: 11, value: 11 },
    { label: 12, value: 12 },
    { label: 13, value: 13 },
    { label: 14, value: 14 },
    { label: 15, value: 15 },
    { label: 16, value: 16 },
    { label: 17, value: 17 },
    { label: 18, value: 18 },
    { label: 19, value: 19 },
    { label: 20, value: 20 },
    { label: 21, value: 21 },
    { label: 22, value: 22 },
    { label: 23, value: 23 },
    { label: 24, value: 24 },
    { label: 25, value: 25 },
    { label: 26, value: 26 },
    { label: 27, value: 27 },
    { label: 28, value: 28 },
    { label: 29, value: 29 },
    { label: 30, value: 30 },
    { label: 31, value: 31 },
  ];
  let Año = [
    { label: 1945, value: 1945 },
    { label: 1946, value: 1946 },
    { label: 1947, value: 1947 },
    { label: 1948, value: 1948 },
    { label: 1949, value: 1949 },
    { label: 1950, value: 1950 },
    { label: 1951, value: 1951 },
    { label: 1952, value: 1952 },
    { label: 1953, value: 1953 },
    { label: 1954, value: 1954 },
    { label: 1955, value: 1955 },
    { label: 1956, value: 1956 },
    { label: 1957, value: 1957 },
    { label: 1958, value: 1958 },
    { label: 1959, value: 1959 },
    { label: 1960, value: 1960 },
    { label: 1961, value: 1961 },
    { label: 1962, value: 1962 },
    { label: 1963, value: 1963 },
    { label: 1964, value: 1964 },
    { label: 1965, value: 1965 },
    { label: 1966, value: 1966 },
    { label: 1967, value: 1967 },
    { label: 1968, value: 1968 },
    { label: 1969, value: 1969 },
    { label: 1970, value: 1970 },
    { label: 1971, value: 1971 },
    { label: 1972, value: 1972 },
    { label: 1973, value: 1973 },
    { label: 1974, value: 1974 },
    { label: 1975, value: 1975 },
    { label: 1976, value: 1976 },
    { label: 1977, value: 1977 },
    { label: 1978, value: 1978 },
    { label: 1979, value: 1979 },
    { label: 1980, value: 1980 },
    { label: 1981, value: 1981 },
    { label: 1982, value: 1982 },
    { label: 1983, value: 1983 },
    { label: 1984, value: 1984 },
    { label: 1985, value: 1985 },
    { label: 1986, value: 1986 },
    { label: 1987, value: 1987 },
    { label: 1988, value: 1988 },
    { label: 1989, value: 1989 },
    { label: 1990, value: 1990 },
    { label: 1991, value: 1991 },
    { label: 1992, value: 1992 },
    { label: 1993, value: 1993 },
    { label: 1994, value: 1994 },
    { label: 1995, value: 1995 },
    { label: 1996, value: 1996 },
    { label: 1997, value: 1997 },
    { label: 1998, value: 1998 },
    { label: 1999, value: 1999 },
    { label: 2000, value: 2000 },
    { label: 2001, value: 2001 },
    { label: 2002, value: 2002 },
    { label: 2003, value: 2003 },
    { label: 2004, value: 2004 },
    { label: 2005, value: 2005 },
    { label: 2006, value: 2006 },
    { label: 2007, value: 2007 },
    { label: 2008, value: 2008 },
    { label: 2009, value: 2009 },
    { label: 2010, value: 2010 },
    { label: 2011, value: 2011 },
    { label: 2012, value: 2012 },
    { label: 2013, value: 2013 },
    { label: 2014, value: 2014 },
    { label: 2015, value: 2015 },
    { label: 2016, value: 2016 },
    { label: 2017, value: 2017 },
    { label: 2018, value: 2018 },
    { label: 2019, value: 2019 },
    { label: 2020, value: 2020 },
    { label: 2021, value: 2021 },
    { label: 2022, value: 2022 },
    { label: 2023, value: 2023 },
  ];
  const HandleChangeSelect = (evento) => {
    console.log(evento);
  };
  return (
    <>
      <Link to="/">
        <Button>Volver Al inicio</Button>
      </Link>
      <div className="ContenedorPrincipal">
        <div className="ContenedorPajaro">
          <img
            className="IMGLOGO"
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1692797716/twitter_bird_400x400_mnh7dd.png"
            alt=""
          />
        </div>
        <div>
          <form className="ContenedorFormulario" action="">
            <h2>Crea Tu Cuenta</h2>
            <div className="ContenedorUsers">
              <TextField
                className="Input"
                id="outlined-basic"
                label="Nombre De usuario"
                variant="outlined"
                onChange={(e) => setUserRegister(e.target.value)}
              />
              <TextField
                sx={{ marginTop: "20px" }}
                className="Input"
                label="Correo Electronico"
                variant="outlined"
                type="email"
                onChange={(e) => setEmailRegister(e.target.value)}
              />
              <TextField
                sx={{ marginTop: "20px" }}
                className="Input"
                label="Contraseña"
                variant="outlined"
                type="password"
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              {/* <TextField
                sx={{ marginTop: "20px" }}
                className="Input"
                label="Repetir Contraseña"
                variant="outlined"
                type="password"
              /> */}
            </div>
            <div className="ContendorNacimiento">
              <h5>Fecha de nacimiento</h5>
              <p style={{ fontSize: "small" }}>
                Esta información no será pública. Confirma tu propia edad,
                incluso si esta cuenta es para una empresa, una mascota u otra
                cosa.
              </p>
              <div className="ContenedorSelectores">
                <Select
                  className="SelectorMes"
                  options={meses}
                  onChange={HandleChangeSelect}
                />
                <Select
                  className="SelectorDia"
                  options={dias}
                  onChange={HandleChangeSelect}
                />
                <Select
                  className="SelectorAño"
                  options={Año}
                  onChange={HandleChangeSelect}
                />
              </div>
            </div>
            <Button
              type="submit"
              sx={{ width: "180px", marginTop: "5vh" }}
              variant="contained"
              onClick={handleRegister}
            >
              Crear Cuenta
            </Button>
          </form>
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
    </>
  );
}

export default ModalCrearCuenta;
