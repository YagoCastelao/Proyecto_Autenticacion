import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

function Private() {
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchPrivateData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/private", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMensagem(response.data.mensagem);
      } catch (error) {
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchPrivateData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FaLock className="mr-2 text-purple-500" /> Página Privada
        </h2>
        <p className="text-gray-600 mb-6">{mensagem}</p>
        <button
          onClick={handleLogout}
          className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition duration-300 flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" /> Sair
        </button>
      </div>
    </motion.div>
  );
}

export default Private;
