import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { useGlobalContext_39 } from './Context_39';
import App_39 from './App_39';
import { AppProvider_39 } from './Context_39';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_39>
      <App_39 />
    </AppProvider_39>
  </React.StrictMode>
);
