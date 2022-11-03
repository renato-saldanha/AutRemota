import React, {useState, Component} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-select-list';
import {connect} from 'react-redux';

import {mostrarErro, sucesso} from '../common';
import {logar} from '../store/actions/usuario';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_usuario: 0,
      usuario_login: '',
      senha: 0,
      listaUsuarios: {
        key: 0,
        value: null,
      },
      servidor: '',
    };

    // console.log('Login constru' + props.route.params.servidor);
  }
  
  componentDidMount() {
    this.setListaLoginUsuarios();
    // console.log('Login Mount axios: ');
  }

  setListaLoginUsuarios = async () => {
    await axios
      .get(`${null}/usuarios/getUsuarios`)
      .then(u => {
        let listaUsuarios = u.data.map(item => {
          return {
            key: item.id_usuario,
            value: item.usuario_login,
          };
        });
        this.setState({listaUsuarios});
      })
      .catch(err =>
        mostrarErro('Houve um erro ao retornar a lista de login. e:' + err),
      );
  };

  logar = () => {
    axios
      .get(`${null}/login/${this.state.id_usuario}&${this.state.senha}`)
      .then(u => {
        this.props.onLogin({...this.state});
        this.props.navigation.navigate('ListaAutorizacao');
      })
      .catch(err => mostrarErro(err.response.data.resposta));
  };

  render() {
    // console.log('Login render:');
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerConfig}>
          <TouchableOpacity
            style={styles.btnConfiguracao}
            onPress={() => this.props.navigation.navigate('Configuracao')}
          />
        </View>

        <ImageBackground
          resizeMode="stretch"
          style={styles.imagemFundo}
          source={require('../../android/app/src/main/res/drawable/icon.png')}
        />

        <View style={styles.containerTela}>
          <View style={styles.containerDropDown}>
            <DropDownPicker
              setSelected={id_usuario => this.setState({id_usuario})}
              data={this.state.listaUsuarios}
              // onSelect={() => alert(selected)}
              placeholder="Selecione o usuário"
              searchPlaceholder="Buscar..."
            />
          </View>

          <View style={styles.viewInput}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Insira sua senha"
              keyboardType="default"
              onChangeText={senha => this.setState({senha})}
            />
          </View>

          <Button
            style={styles.buttonEntrar}
            title="Entrar"
            onPress={this.logar}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: usuario => dispatch(logar(usuario)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerConfig: {
    flex: 1,
  },
  btnConfiguracao: {
    flex: 0.5,
    marginLeft: '95%',
    alignContentItems: 'flex-end',
  },
  imagemFundo: {
    flex: 4,
  },
  containerTela: {
    flex: 7,
    margin: 10,
  },
  containerDropDown: {
    marginBottom: 15,
  },
  dropDown: {
    marginBottom: 15,
    backgroundColor: 'gray',
  },
  inputSenha: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  buttonEntrar: {
    width: 70,
  },
});
