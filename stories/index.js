import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DayPicker from '../src/DayPicker';
import '../src/DayPicker.scss';

storiesOf('DayPicker', module)
  .add(
    'examples',
    () => (
      <div style={{ margin: 10 }}>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          <DayPicker
            onDayClick={action('onDayClick')}
          />
        </div>
        <div style={{ border: '1px dashed #ddd', padding: '1em', margin: '10px 0' }}>
          With <strong>active</strong> prop set to <strong>new Date()</strong>.
          <DayPicker
            active={new Date()}
            onDayClick={action('onDayClick')}
          />
        </div>
      </div>
    )
  );
