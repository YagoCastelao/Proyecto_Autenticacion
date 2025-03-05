import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando:", { email, password });
    try {
      const response = await axios.post("http://localhost:5000/token", {
        email,
        password,
      });
      console.log("Resposta recebida:", response.data);
      sessionStorage.setItem("token", response.data.token);
      navigate("/private");
    } catch (error) {
      console.error("Erro na requisição:", error.message);
      if (error.response) {
        console.error("Detalhes do erro:", error.response.data);
        alert(error.response.data.erro || "Erro ao fazer login");
      } else {
        alert(
          "Erro de conexão com o servidor. Verifique se o backend está rodando."
        );
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FaSignInAlt className="mr-2 text-green-500" /> Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
