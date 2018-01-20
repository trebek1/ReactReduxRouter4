import { CLICKED } from '../actions/constants';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case CLICKED:
      return state + 1;
    default:
      return state
  }
}

export default countReducer;

