/**
 * Created by geekzwb on 2017/8/8.
 * What for:
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import reducers from '../reducers';

// use browser history
export const history = createHistory();

const middlewares = [routerMiddleware(history)];

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.devToolsExtension && window.devToolsExtension()));

export default store;