import {USER_LOGIN} from './actionTypes';

export const logar = usuario => {
  return {
    type: USER_LOGIN,
    payload: usuario,
  };
};
