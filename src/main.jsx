import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";

import {BrowserRouter, RouterProvider} from "react-router-dom";

const defaultState = {
    counter: 0,
};

const counterReducer = (state = defaultState, action) => {
    return state;
};

const store = createStore(counterReducer);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
