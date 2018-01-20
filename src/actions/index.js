import { CASE1 } from './constants';
import { CLICKED } from './constants';

const actionCreatorOne = (data) => {
  return { type: CASE1,
      data
  }
}

const clickHandler = () => {
  return { type: CLICKED };
}

export { actionCreatorOne, clickHandler };