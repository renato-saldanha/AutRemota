import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import axios from 'axios';
import {server, mostrarErro, sucesso} from '../common';
import {userSelector} from 'react-redux';

import ItemAutorizacao from '../componentes/ItemAutorizacao';

const estadoInicial = {
  autorizacoes: [],
};

export default class ListaAutorizacao extends Component {
  state = {...estadoInicial};

  componentDidMount() {
    this.getAutorizacoes();
  }

  getAutorizacoes = async () => {
    const usuGerenteSupervisor = userSelector(state => state.id_usuario);
    await axios
      .get(`${server}/autorizacao/${usuGerenteSupervisor}`)
      .then(aut => this.setState({autorizacoes: aut.data}))
      .catch(err => mostrarErro(err));
  };

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <FlatList
          data={this.state.autorizacoes}
          keyExtractor={item => `${item.id_autorizacao}`}
          renderItem={({item}) => <ItemAutorizacao {...item} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
