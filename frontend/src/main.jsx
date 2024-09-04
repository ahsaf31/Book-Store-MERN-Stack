import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {SnackbarProvider} from 'notistack'

// Create the root element using createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <SnackbarProvider>
      <App />
      </SnackbarProvider>
    </BrowserRouter>
);
