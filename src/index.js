import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouters } from './routers/AppRouters';
import './style/index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Provider} from "react-redux"
import {store} from "./store/store"

ReactDOM.render(
  <Provider store = {store}>
    <AppRouters/>
  </Provider>,
  document.getElementById('root')
);
