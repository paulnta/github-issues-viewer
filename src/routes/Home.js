import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import IssueList from '../components/IssueList';
import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';

class Home extends Component {
  constructor(props) {
    super(props);
    // TODO: make this dynamic
    this.state = {
      owner: 'facebook',
      name: 'react',
    };
  }

  render() {
    return (
      <>
        <Header>
          <Typography variant="h6">facebook / react </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Typography>
        </Header>
        <Content>
          <IssueList
            owner={this.state.owner}
            name={this.state.name}
          />
        </Content>
      </>
    );
  }
}

export default Home;
