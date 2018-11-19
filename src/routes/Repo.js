import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import IssueList from '../components/IssueList';
import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';

class Repo extends Component {
  render() {
    const { match } = this.props;
    const { owner, name } = match.params;
    // TODO: load description
    return (
      <>
        <Header>
          <Typography variant="h6">{owner} / {name} </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Typography>
        </Header>
        <Content>
          <IssueList owner={owner} name={name} />
        </Content>
      </>
    );
  }
}

export default Repo;
