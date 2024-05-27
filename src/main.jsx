import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fontsource-variable/inter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <style>{`
      body {
        font-family: 'Inter Variable', sans-serif;
      }
    `}</style>
    <App />
  </React.StrictMode>,
)
