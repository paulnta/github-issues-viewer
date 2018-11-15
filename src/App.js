import React, { Component } from "react";
import Layout from "./components/Layout";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
