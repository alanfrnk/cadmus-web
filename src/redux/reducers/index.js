import { combineReducers } from 'redux';

import { body } from './body.reducer';

const rootReducer = combineReducers({
  body,
});

export default rootReducer;