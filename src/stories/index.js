import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { storiesOf } from '@storybook/react';

import Sheet from './Sheet';
import Row from './Row';
import { IssueState } from '../constants';
import IssueListItem from '../components/IssueListItem';
import IssueComment from '../components/IssueComment';
import TimeAgo from '../components/TimeAgo';
import InputBase from '../components/InputBase';
import InputSearch from '../components/InputSearch';
import IssueHeader from '../components/IssueHeader';
import RepoListItem from '../components/RepoListItem';
import Message from '../components/Message';

storiesOf('Components', module)
  .add('Time', () => (
    <Sheet title="Time">
      <Row label="2018-11-13T03:46:02Z">
        <Typography variant="body1">
          <TimeAgo date="2018-11-13T03:46:02Z" />
        </Typography>
      </Row>
      <Row label="2018-11-10T03:46:02Z">
        <Typography variant="body1">
          <TimeAgo date="2018-11-10T03:46:02Z" />
        </Typography>
      </Row>
      <Row label="2018-10-13T03:46:02Z">
        <Typography variant="body1">
          <TimeAgo date="2018-10-13T03:46:02Z" />
        </Typography>
      </Row>
      <Row label="2013-05-30T03:46:02Z">
        <Typography variant="body1">
          <TimeAgo date="2013-05-30T03:46:02Z" />
        </Typography>
      </Row>
    </Sheet>
  ))
  .add('Button', () => (
    <Sheet title="Button">
      <Button variant="contained" color="primary">Load more</Button>
      <Button color="primary">Load more</Button>
    </Sheet>
  ))
  .add('Messages', () => (
    <>
      <Sheet title="Empty state">
        <Message
          title="No messages yet"
          description="This is where your chats are stored"
        />
      </Sheet>
      <Sheet title="Error state">
        <Message
          title="Something went wrong"
          description="There was a problem loading data. Check your internet and try again."
          icon={<ErrorIcon color="error" />}
        />
      </Sheet>
    </>
  ))
  .add('Forms', () => (
    <Sheet title="Text fields">
      <Row>
        <InputBase placeholder="Type something" />
      </Row>
      <Row>
        <InputSearch placeholder="Search something" />
      </Row>
    </Sheet>
  ))
  .add('Repos', () => (
    <>
      <Sheet title="Repo list item">
        <RepoListItem
          title="facebook/react"
          description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
          starCount={116000}
        />
        <RepoListItem
          title="angular/angular"
          description="One framework. Mobile & desktop."
          starCount={42800}
        />
        <RepoListItem
          title="vuejs/vue"
          description="🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web."
          starCount={120000}
        />
      </Sheet>
      <Sheet title="Repo list item (pending)">
        <RepoListItem loading />
      </Sheet>
    </>
  ))
  .add('Issues', () => (
    <>
      <Sheet title="Issue list item">
        <IssueListItem
          title="Provide more ways to bail out inside Hooks"
          number={14110}
          state={IssueState.OPEN}
          author="gaearon"
          createdAt="2018-11-05T19:12:20Z"
          commentCount={11}
        />
        <IssueListItem
          title="Docs don't even mention reconciliation!"
          number={37}
          state={IssueState.CLOSED}
          author="petehunt"
          createdAt="2013-06-01T20:01:11Z"
          commentCount={5}
        />
        <IssueListItem
          title="When crossOrigin prop is provided the rendered prop should be lowercase"
          number={14216}
          state={IssueState.CLOSED}
          author="timneutkens"
          createdAt="2018-11-13T10:50:21Z"
          commentCount={2}
        />
      </Sheet>
      <Sheet title="Issue list item (pending)">
        <IssueListItem loading />
      </Sheet>
    </>
  ))
  .add('Comment', () => (
    <>
      <Sheet title="Comment">
        <IssueComment
          author={{
            login: 'gaearon',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/810438?v=4'
          }}
          createdAt="2018-11-05T19:12:20Z"
          body="There's a few separate issues but I wanted to file an issue to track them in general:\r\n\r\n* `useState` doesn't offer a way to bail out of rendering once an update is being processed. This gets a bit weird because we actually process updates *during* the rendering phase. So we're already rendering. But we could offer a way to bail on children.\r\n* `useContext` doesn't let you subscribe to a *part* of the context value (or some memoized selector) without fully re-rendering.">
        </IssueComment>
        <IssueComment
          author={{
            login: 'markerikson',
            avatarUrl: 'https://avatars1.githubusercontent.com/u/1128784?v=4'
          }}
          createdAt="2018-11-05T19:14:21Z"
          body="Yay! Thanks :)">
        </IssueComment>
        <IssueComment
          author={{
            login: 'alexeyraspopov',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/858295?v=4'
          }}
          createdAt="2018-11-05T19:15:17Z"
          body="> `useContext` doesn't let you subscribe to a part of the context value (or some memoized selector) without fully re-rendering.\r\n\r\n`useContext` receives `observedBits` as a second param. Isn't it the same?\r\n">
        </IssueComment>
      </Sheet >
      <Sheet title="Comment (pending)">
        <IssueComment loading />
      </Sheet>
    </>
  ))
  .add('Issue header', () => (
    <>
      <Sheet title="Issue header">
        <IssueHeader
          title="When crossOrigin prop is provided the rendered prop should be lowercase"
          number={14216}
          state={IssueState.CLOSED}
          author="timneutkens"
          createdAt="2018-11-13T10:50:21Z"
          commentCount={2}
          url="#"
        />
      </Sheet>
      <Sheet title="Issue header (pending)">
        <IssueHeader loading />
      </Sheet>
    </>
  ));
