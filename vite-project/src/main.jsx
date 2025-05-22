import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CounterApp from './counterApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
