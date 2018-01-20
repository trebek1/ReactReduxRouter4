import { CASE2 } from '../actions/constants';

const reducer2 = (state = {}, action) => {
  switch (action.type) {
    case CASE2:
      return {...action.name}
    default:
      return state
  }
}

export default reducer2;
