/**
 * Created by geekzwb on 2017/8/8.
 * What for:
 */
import {combineReducers} from 'redux-immutable';

import dashboardReducer from '../../modules/dashboard/reducers';

const rootReducer = combineReducers({
  dashboardReducer
});

export default rootReducer;