//import {} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import usuarioReducer from './reducers/usuario';

const reducers = combineReducers({usuarioReducer});
const storeConfig = () => configureStore({reducer: reducers});

export default storeConfig;
