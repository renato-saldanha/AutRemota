import {IP_SERVIDOR} from '../actions/actionTypes';

const initialState = {
  ip_servidor: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IP_SERVIDOR:
      return {
        ...state,
        ip_servidor: action.payload.ip_servidor,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
