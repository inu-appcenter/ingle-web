import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import './index.css';
=======
import './index.css';
import App from '@/App';
>>>>>>> b184ce704a16a8cacd7f02a8fa89de030659fa57

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
