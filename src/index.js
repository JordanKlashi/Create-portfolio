import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import App from './App';
import { ThemeProvider } from './components/Theme/Themecontexte';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
