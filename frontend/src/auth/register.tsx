import { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "./authProvider";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to="/game"/>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/*Volver*/}
        <div className="absolute top-4 left-4">
            <Link to="/">
                <button className="bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-lg">
                    Volver
                </button>
            </Link>
        </div>
        <div className="relative flex flex-col m-6 space-y-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold text-center">Registrate</span>
            <span className="font-light text-gray-400 mb-8 text-center pt-2 text-xl">
              Porfavor ingrese sus datos
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Nombre de usuario</span>
              <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
              value={username}
              onChange = {(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Contraseña</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={password}
                onChange = {(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Confirmar contraseña</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-center w-full py-4">
            </div>
            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Registrarse
            </button>
          <div className="text-center text-gray-400">
          </div>
          </div>
        {/* right side */}
          <div className="relative">
            <img
              src="/paisaje3.jpg"
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
    </div>
  )
}
