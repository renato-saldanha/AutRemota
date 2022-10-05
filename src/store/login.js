import {USER_LOGIN} from '../action/actionTypes';

const initialState = {
  id_usuario: null,
  nome_usuario: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        id_usuario: action.payload.id_usuario,
        nome_usuario: action.payload.nome_usuario,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
