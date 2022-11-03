import {IP_SERVIDOR} from './actionTypes';

export const gravar = ip_servidor => {
  return {
    type: IP_SERVIDOR,
    payload: ip_servidor,
  };
};
