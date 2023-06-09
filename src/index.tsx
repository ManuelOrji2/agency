import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActiveLinkProvider } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ActiveLinkProvider>
       <App />
    </ActiveLinkProvider>
   
  </React.StrictMode>
);

