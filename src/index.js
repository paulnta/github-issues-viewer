import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloLogger from 'apollo-link-logger';
import { ApolloLink } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Theme from './components/Theme';
import CssBaseline from './components/CssBaseline';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
    httpLink
  ]),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Theme>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Theme>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
