import React from "react";
import ReactDOM from "react-dom";
import App from './App'

import "assets/scss/black-dashboard-react.css";
import "assets/customCSS/style.css";
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
