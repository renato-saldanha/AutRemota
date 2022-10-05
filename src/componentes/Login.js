import React, {useState} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-select-list';

import {connect} from 'react-redux';

import {server, mostrarErro, sucesso} from '../common';
import {login} from '../store/actions/login';

const Login = () => {
  const [selected, setSelected] = React.useState({});
  const [usuarios, setUsuarios] = React.useState([]);

  this.state = {
    id_usuario: null,
    nome_usuario: null,
  };

  React.useEffect(() => {
    axios
      .get(`${server}/usuarios/getUsuarios`)
      .then(u => {
        let listaUsuarios = u.data.map(item => {
          return {
            key: item.id_usuario,
            value: item.usuario_login,
          };
        });
        setUsuarios(listaUsuarios);
      })
      .catch(err => mostrarErro(err));
  });

  const login = () => {
    this.props.onLogin({...this.state});
    this.props.navigation.navigate('ListaAutorizacao');
  };

  return (
    <ImageBackground
      style={styles.imagemFundo}
      source={require('../../android/app/src/main/res/drawable/icon.png')}>
      <View style={styles.container}>
        <View style={styles.containerDropDown}>
          <DropDownPicker
            setSelected={setSelected}
            data={usuarios}
            onSelect={() => alert(selected)}
            placeholder="Selecione o usuário"
            searchPlaceholder="Buscar..."
          />
        </View>
        <TextInput
          style={styles.inputSenha}
          placeholder="Insira sua senha"
          keyboardType="default"
        />
        <Button
          style={styles.buttonEntrar}
          title="Entrar"
          onPress={this.login}
        />
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: usuario => dispatch(login(usuario)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: '50%',
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  containerDropDown: {
    marginBottom: 15,
  },
  dropDown: {
    marginBottom: 15,
  },
  inputSenha: {
    // marginLeft: '15%',
    marginBottom: 15,
    borderWidth: 1,
  },
  buttonEntrar: {
    width: 70,
  },
});
