import React, {Component} from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import {server, mostrarErro, sucesso} from './common';
import Autorizacao from './componentes/Autorizacao';

const estadoInicial = {
  autorizacoes: [],
};

export default class App extends Component {
  state = {...estadoInicial};

  componentDidMount() {
    this.getAutorizacoes();
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <FlatList
          data={this.state.autorizacoes}
          keyExtractor={item => `${item.id_autorizacao}`}
          renderItem={({item}) => <Autorizacao {...item} />}
        />
      </SafeAreaView>
    );
  }

  async getAutorizacoes() {
    const usuGerenteSupervisor = 2;
    await axios
      .get(`${server}/autorizacao/${usuGerenteSupervisor}`)
      .then(aut => this.setState({autorizacoes: aut.data}))
      .catch(err => mostrarErro(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
