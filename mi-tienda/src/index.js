import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouters } from './routers/AppRouters';
import './style/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.render(
  <React.StrictMode>
    <AppRouters/>
  </React.StrictMode>,
  document.getElementById('root')
);
