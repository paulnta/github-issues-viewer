import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import LightBulbFull from '../svgIcons/LightBulbFull';
import LightBulbOutline from '../svgIcons/LightBulbOutline';
import { ThemeContext } from './Theme';

const ThemeToggle = () => (
  <ThemeContext>
    {({ type, changeTheme }) => {

      const onToggle = (e) => {
        const value = type === 'dark' ? 'light' : 'dark';
        changeTheme(value);
      };

      return (
        <Tooltip title="Toogle dark/light theme">
          <Checkbox
            color="default"
            icon={<LightBulbOutline />}
            checkedIcon={<LightBulbFull />}
            checked={type === 'dark'}
            onChange={onToggle}
          />
        </Tooltip>
      );
    }}
  </ThemeContext>
);

export default ThemeToggle;
