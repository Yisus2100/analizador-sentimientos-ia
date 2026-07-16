# 🧠 Analizador de Sentimientos - CI/CD con GitHub Actions

Proyecto académico para la materia **Gestión de la Configuración del Software**
Universidad de Guayaquil - Facultad de Ciencias Matemáticas y Físicas

## 📋 Descripción

Sistema que analiza el sentimiento de reseñas de productos (positivo/negativo/neutral),
demostrando un flujo completo de **Integración Continua y Despliegue Continuo (CI/CD)**.

## 🏗️ Arquitectura

- **Backend:** Spring Boot 4.1 + PostgreSQL
- **Frontend:** React + Vite
- **CI/CD:** GitHub Actions
- **Despliegue:** Render (backend + base de datos) y Vercel (frontend)

## 🔗 Enlaces en vivo

- **Frontend:** https://analizador-sentimientos-ia.vercel.app
- **Backend (health check):** https://analizador-sentimientos-backend.onrender.com/api/health
- **Pipeline CI/CD:** https://github.com/Yisus2100/analizador-sentimientos-ia/actions

## ⚙️ Flujo de CI/CD

Cada `push` a la rama `main` dispara automáticamente:

1. **Build y Test del Backend:** compila el proyecto Spring Boot y corre pruebas contra
   un contenedor de PostgreSQL de prueba (servicio efímero en GitHub Actions).
2. **Build del Frontend:** instala dependencias y genera el build de producción con Vite.
3. **Deploy automático:** al pasar el pipeline, Render y Vercel redespliegan automáticamente
   las versiones más recientes del backend y frontend respectivamente.