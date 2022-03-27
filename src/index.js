import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { UserContextProvider } from './component/contextApi/index';
// import { Provider } from 'react-redux';
// import 'swiper/css/bundle';
// import ReactDOM from "react-dom";

// eslint-disable-next-line
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
