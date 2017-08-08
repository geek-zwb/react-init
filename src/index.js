import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Dashboard from './modules/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
