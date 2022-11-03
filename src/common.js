import {Alert} from 'react-native';

function mostrarErro(err) {
  Alert.alert('Ocorreu um problema!', `${err}`);
}

function sucesso(msg) {
  Alert.alert('Sucesso!', msg);
}

export {mostrarErro, sucesso};
