import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CounterState from './MobxCounterState';
import Counter from './MobxCounter';

const appState = new CounterState();

render(
  <AppContainer>
    <Counter appState={appState} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./MobxCounter', () => {
    const NextApp = require('./MobxCounter').default;

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
