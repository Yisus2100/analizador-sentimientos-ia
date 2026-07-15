import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/api/health')
      .then(response => {
        setHealth(response.data)
      })
      .catch(err => {
        setError('No se pudo conectar con el backend. ¿Está corriendo?')
        console.error(err)
      })
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧠 Analizador de Sentimientos</h1>
      <h2>Estado de conexión con el Backend</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {health ? (
        <div style={{
          background: '#1e1e1e',
          padding: '1.5rem',
          borderRadius: '8px',
          color: '#4ade80'
        }}>
          <p><strong>Status:</strong> {health.status}</p>
          <p><strong>Mensaje:</strong> {health.mensaje}</p>
          <p><strong>Timestamp:</strong> {health.timestamp}</p>
        </div>
      ) : (
        !error && <p>Conectando con el backend...</p>
      )}
    </div>
  )
}

export default App