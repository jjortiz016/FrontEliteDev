import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// creamos el client apollo

const client = new ApolloClient ({
  uri: "https://graphqlzero.almansi.me/api", // colocamo el endpoint
  cache: new InMemoryCache(), //para guardar datos en el cache del cliente y no tener que volver a consultar


});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)).
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
