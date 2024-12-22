import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Şimdilik bu dosyayı bırakabiliriz

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='containers'>
      <App />
    </div>
  </React.StrictMode>
);
