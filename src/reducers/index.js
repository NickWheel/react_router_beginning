import { combineReducers } from 'redux';

import ligth from './ligth';
import appReducer from './appReducer';

export default combineReducers({
  ligth,
  appReducer,
});
