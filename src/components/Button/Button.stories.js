import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Basic components', module)
  .add('Simple Button', () => (
    <Button>Simple Button!</Button>
  ))
  .add('Primary Button', () => (
    <Button primary>Primary Button!</Button>
  ))
