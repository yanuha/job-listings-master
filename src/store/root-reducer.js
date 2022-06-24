import { combineReducers } from 'redux';

import { positionReducer } from './positions/positions-reducers';

export const rootReducer = combineReducers({
  positions: positionReducer,
});
