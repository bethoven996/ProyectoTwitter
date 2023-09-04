import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { usuariosDatos } from "./FireBase";

export const AuthContext = createContext();
const auth = getAuth();
export const useAuth = () => {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    console.log("Error");
  }
  return contexto;
};
function AutenticacionUsuarios({ children }) {
  const Contexto = useContext(AuthContext);
  if (!Contexto) {
    console.log("Error");
  } else {
    return Contexto;
  }
  const Registro = async (email, password) => {
    const registrado = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(registrado);
  };

  const [usuario, setUsuario] = useState("");
  useEffect(() => {
    const suscribido = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no se encontro ese usuario");
        setUsuario("");
      } else {
        setUsuario(currentUser);
      }
    });
    return () => suscribido();
  }, []);
  const login = async (email, password) => {
    const logeado = await signInWithEmailAndPassword(auth, email, password);
    console.log(logeado);
  };
  const loginWhitGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };
  let data = {
    Contexto,
    Registro,
    login,
    loginWhitGoogle,
    logout,
    usuario,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AutenticacionUsuarios;
