import { ADD, MINUS, CUSTO } from '../constants/counter';
export const add = () => {
  return {
    type: ADD
  };
};
export const minus = () => {
  return {
    type: MINUS
  };
};
export const handleChange = value => {
  return {
    type: CUSTO,
    value: value
  };
};
// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}