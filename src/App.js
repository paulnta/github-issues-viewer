import React, { Component } from 'react';
import logo from './logo.svg';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './App.css';

const query = gql`
{
  user(login: "paulnta") {
    login
    avatarUrl
  }
}
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.howtographql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Graphql
          </a>
        </header>
        <main className="App-main">
          <div className="App-content">
            <Query query={query}>
              {({ data, loading }) => (
                loading
                  ? <div>Loading...</div>
                  : <pre>{JSON.stringify(data, null, 2)}</pre>
              )}
            </Query>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
