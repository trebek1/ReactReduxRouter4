import { combineReducers } from 'redux';

import reducer1 from '../reducers/reducer1';
import reducer2 from '../reducers/reducer2';
import imagesReducer from '../reducers/imagesReducer';
import countReducer from '../reducers/countReducer';

const rootReducer = combineReducers({
  reducer1,
  reducer2,
  imagesReducer,
  countReducer
});

export default rootReducer
