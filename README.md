# Proyecto de Autenticación Web 🌐🔒

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completo-brightgreen?style=flat)  
*Una aplicación web de autenticación con un diseño profesional y animaciones.*

## ¿Qué es este proyecto? 📝

Este proyecto es una aplicación web que permite a los usuarios registrarse, iniciar sesión y acceder a una área privada protegida. Utiliza un backend en **Python** con **Flask** para gestionar la autenticación mediante tokens JWT y un frontend en **React** con **Vite** para una interfaz rápida y moderna. El diseño está estilizado con **Tailwind CSS**, animado con **Framer Motion** e incluye íconos de **React Icons**.

- **Rutas disponibles**:
  - `/signup`: Registro de nuevos usuarios.
  - `/login`: Inicio de sesión.
  - `/private`: Área privada (requiere autenticación).
  - `/`: Página pública con instrucciones.

## Tecnologías Utilizadas 🚀

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-000000?style=flat&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)

## ¿Cómo probar el proyecto? 🛠️

Sigue estos pasos para ejecutar y probar la aplicación localmente:

### Requisitos
- **Node.js** (v18 o superior).
- **Python** (v3.8 o superior).

### Instrucciones
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-autenticacion.git
   cd proyecto-autenticacion

2. **Configura y ejecuta el backend**:
   ```bash
   cd proyecto-autenticacion
    python -m venv venv
    source venv/bin/activate  # Linux/Mac
    venv\Scripts\activate     # Windows
    pip install -r requirements.txt
    python app.py
   
El backend estará disponible en http://localhost:5000.

3. **Configura y ejecuta el frontend**:
   ```bash
   cd frontend
    npm install
    npm run dev

El frontend estará disponible en http://localhost:5173.

4. **Prueba las rutas**:
   
Abre tu navegador y visita:

- http://localhost:5173/ para la página pública.
- http://localhost:5173/signup para registrarte.
- http://localhost:5173/login para iniciar sesión.
- http://localhost:5173/private para acceder a la área privada (requiere login).
  
5. **Explora**:
Regístrate con un email y contraseña, inicia sesión y accede a la área privada. ¡Luego, cierra sesión desde allí!

---

Proyecto creado con ❤️ por YagoCastelao
