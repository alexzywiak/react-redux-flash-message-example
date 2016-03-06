import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './reducer/index';
import App from './component/app';

render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('container')
);