import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import store from 'react-native-simple-store';
import axios from 'axios';

import Navigator from '../Navigator';
import {IPSERVIDOR} from '../const';
import {mostrarErro, sucesso} from '../common';

export default class Config extends Component {
  constructor() {
    super();
    this.state = {
      servidor: null,
    };

    console.log('_______________');
  }

  componentDidMount() {
    this.carregarConfig().then(servidor => this.setState({servidor}));
  }

  gravarIp = value => {
    try {
      store.save(IPSERVIDOR, 'http://' + value);
    } catch (e) {
      mostrarErro('Ocorreu um erro ao gravar o IP: ' + e);
    }
  };

  carregarConfig = async () => {
    const servidor = await store.gt(IPSERVIDOR);
    return servidor;
    // this.setState({servidor});
    // console.log('Ip async:' + this.state.servidor);
    // await Promise.all([await store.get(IPSERVIDOR)]).then(servidor => {
    //   this.setState({servidor});
    // });
  };

  render() {
    console.log('Config render: ' + this.state.servidor);
    return <Navigator servidor={this.state.servidor} />;
  }
}
