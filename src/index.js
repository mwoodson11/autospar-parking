import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from './theme.styles';
import GlobalCSS from './global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
        <GlobalCSS />
        <App />
  </Theme>
);