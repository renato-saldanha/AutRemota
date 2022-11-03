import {USER_LOGIN} from '../actions/actionTypes';

const initialState = {
  id_usuario: null,
  usuario_login: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        id_usuario: action.payload.id_usuario,
        usuario_login: action.payload.usuario_login,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
