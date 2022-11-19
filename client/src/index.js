import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { compose,applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers'
import {BrowserRouter} from 'react-router-dom';

const userInfoFromStorage = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : null;

const initialState = {
  auth: { authData: userInfoFromStorage },
};
export const store = createStore(reducers,initialState,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
