import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';
import IssueHeader from '../components/IssueHeader';
import IssueComment from '../components/IssueComment';
import IssueCommentList from '../components/IssueCommentList';

const styles = {
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
  },
  issueHeader: {
    marginTop: 24,
    paddingLeft: 62,
  },
};

const ISSUE_QUERY = gql`
  query IssueQuery($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        id
        number
        title
        author { login, avatarUrl }
        createdAt
        comments { totalCount }
        state
        body
        url
      }
    }
  }
`;

class Issue extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    match: PropTypes.object,
  }

  render() {
    const { classes, match } = this.props;
    const { owner, name } = match.params;
    const issueNumber = Number(match.params.number);
    return (
      <>
        <Query
          query={ISSUE_QUERY}
          variables={{
            owner,
            name,
            number: issueNumber,
          }}
        >
          {({ data, loading, error }) => {
            if (error) return 'Error';

            const { issue = {} } = data.repository || {};
            const { author = {}, comments = {} } = issue;

            return (
              <>
                <Header>
                  <div className={classes.breadcrumb}>
                    <Link to={`/${owner}/${name}`}>
                      <IconButton>
                        <ArrowBack color="action" />
                      </IconButton>
                    </Link>
                    <Typography variant="h6">{owner} / {name} </Typography>
                  </div>
                  <IssueHeader
                    className={classes.issueHeader}
                    loading={loading}
                    title={issue.title}
                    number={issue.number}
                    createdAt={issue.createdAt}
                    state={issue.state}
                    author={author ? author.login : null}
                    commentsCount={comments.totalCount}
                    url={issue.url}
                  />
                </Header>
                <Content>
                  <IssueComment
                    loading={loading}
                    author={issue.author}
                    body={issue.body}
                    createdAt={issue.createdAt}
                  />
                  {!loading && (
                    <IssueCommentList
                      owner={owner}
                      name={name}
                      number={issueNumber}
                      placeholderCount={Math.min(comments.totalCount, 3)}
                    />
                  )}
                </Content>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default withStyles(styles)(Issue);
