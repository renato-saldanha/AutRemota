import {USER_LOGIN} from './actionTypes';

export const login = usuario => {
  return {
    type: USER_LOGIN,
    payload: usuario,
  };
};
