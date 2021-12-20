import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom' //para que cualquier componte de la aplicacion pueda hacer routing
import { setContext } from '@apollo/client/link/context';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,  
  InMemoryCache,
  HttpLink,
 
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"

// creamos el client apollo


const httpLink = createHttpLink({ //indica a cual url nos vamos a conectar
  uri: process.env.REACT_APP_API_URL

})



const authLink = setContext((_, { headers }) =>{  //manda los encabezado llamado authorization 
   //const token = process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;
    
 // get the authentication token from local storage if it exists
  // eslint-disable-next-line no-undef
  const token = sessionStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: token } : {}),
    }
  }
 });

 const errorLink = onError(({ graphQLErrors, networkError }) => { //captura errores
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          )
    
    });
  };
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
/*
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      switch (extensions.code) {
        case 'UNAUTHENTICATED':
          sessionStorage.removeItem('token');
          window.location.href = '/users/login';
          break;
        case 'FORBIDDEN':
          window.location.href = '/no-access';
          break;
        default: 
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          )
      }
    });
  };

  if (networkError) console.log(`[Network error]: ${networkError}`);
});*/





//creamos el cliente
const client = new ApolloClient({
  
  link: authLink.concat(authLink, errorLink, httpLink), //va tener el link mas la configuracione de los headers
  cache: new InMemoryCache()  //para que las consultas sean mas rapidas

});


ReactDOM.render(
  <React.StrictMode>
     <Router>
      <ApolloProvider client={client}>
           <App />

      </ApolloProvider>
      </Router>     
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)).
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
