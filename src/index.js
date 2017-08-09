import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import {history} from './redux/store';
import store from './redux/store';
import Dashboard from './modules/dashboard/Dashboard';
import App from './App';
import NoMatch from './common/noMatch';

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route component={NoMatch}/>
        </Switch>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
