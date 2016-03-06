import {combineReducers} from 'redux';

import messageReducer from './reducer_message';

const rootReducer = combineReducers({
  flashMessage: messageReducer
});

export default rootReducer;