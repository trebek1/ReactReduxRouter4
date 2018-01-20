import { CASE1 } from '../actions/constants';

const reducer1 = (state = {}, action) => {
  switch (action.type) {
    case CASE1:
      return {...action.name}
    default:
      return state
  }
}

export default reducer1;

