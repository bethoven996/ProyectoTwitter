import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
export const AuthContext = createContext();
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
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AutenticacionUsuarios;
