import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserPlus, FaSignInAlt, FaLock } from "react-icons/fa";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Private from "./components/Private";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center justify-center min-h-screen px-4"
            >
              <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  Bienvenido al sistema de autenticación
                </h1>
                <p className="text-gray-600 mb-8">
                  ¡Elige una de las opciones a continuación para comenzar tu
                  viaje!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <Link
                    to="/signup"
                    className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300"
                  >
                    <FaUserPlus className="text-blue-500 text-3xl mb-2" />
                    <span className="text-blue-700 font-semibold">
                      Registro
                    </span>
                  </Link>
                  <Link
                    to="/login"
                    className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300"
                  >
                    <FaSignInAlt className="text-green-500 text-3xl mb-2" />
                    <span className="text-green-700 font-semibold">Login</span>
                  </Link>
                  <Link
                    to="/private"
                    className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300"
                  >
                    <FaLock className="text-purple-500 text-3xl mb-2" />
                    <span className="text-purple-700 font-semibold">
                      Área Privada
                    </span>
                  </Link>
                </div>

                <div className="text-left">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Cómo utilizar el sistema
                  </h2>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                      <strong>Registro:</strong>Haga clic en "Registrarse" para
                      crear una cuenta con tu correo electrónico y contraseña.
                    </li>
                    <li>
                      <strong>Acceso:</strong>Utilice sus credenciales para
                      iniciar sesión en el sistema a través de la opción
                      “Iniciar sesión”.
                    </li>
                    <li>
                      <strong>Accede al Área Privada:</strong>Después de iniciar
                      sesión, vaya a “Área Privada” para ver contenido
                      exclusivo.
                    </li>
                    <li>
                      <strong>Salir:</strong>En el área privada, haga clic en
                      “Salir” para finalizar tu sesión.
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </div>
  );
}

export default App;
