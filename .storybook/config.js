import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Tooltip from '@material-ui/core/Tooltip';
import Theme from '../src/components/Theme';
import CssBaseline from '../src/components/CssBaseline';
import ThemeToggle from '../src/components/ThemeToggle';

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
  <Theme>
    <CssBaseline>
      <ThemeToggle />
      {story()}
    </CssBaseline>
  </Theme>
))

configure(loadStories, module);
