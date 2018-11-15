import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import IssueComment from './IssueComment';

const COMMENTS_QUERY = gql`
  query IssueCommentList($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        id
        comments(first: 30) {
          edges {
            node {
              id
              author { login, avatarUrl }
              body
              createdAt
            }  
          }
        }
      }
    }
  }
`;

const IssueCommentList = ({ owner, name, number, placeholderCount }) => (
  <Query
    query={COMMENTS_QUERY}
    variables={{ owner, name, number }}
  >
    {({ data, loading, error }) => {
      if (error) {
        return 'Error';
      }

      if (loading) {
        return [...Array(placeholderCount).keys()].map(key => (
          <IssueComment key={key} loading />
        ));
      }

      const { comments } = data.repository.issue;
      return comments.edges.map(({ node: comment }) => (
        <IssueComment
          key={comment.id}
          body={comment.body}
          createdAt={comment.createdAt}
          author={comment.author}
        />
      ));
    }}
  </Query >
);

IssueCommentList.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  placeholderCount: PropTypes.number,
};

export default IssueCommentList;
