import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';
import axios from 'axios';
import {server, sucesso, erro, mostrarErro} from '../common';

export default props => {
  const dataFormatada = moment(props.data)
    .locale('pt-br')
    .format('D [de] MMMM [de] YYYY');

  const efetuarConfirmacao = id_autorizacao => {
    const id = parseInt(id_autorizacao);

    Alert.alert(
      'Confirmação da solicitação',
      'Deseja aprovar ou reprovar a solicitação?',
      [
        {
          text: 'Aprovar',
          onPress: () => efetivarSolicitacao(id, 1),
        },
        {
          text: 'Reprovar',
          onPress: () => efetivarSolicitacao(id, 2),
        },
      ],
    );
  };

  const efetivarSolicitacao = async (id_autorizacao, situacaoAprovacao) => {
    await axios
      .post(`${server}/autorizacao/${id_autorizacao}&${situacaoAprovacao}`)
      .then(s => sucesso('Processo efetuado com sucesso!'))
      .catch(err =>
        mostrarErro(
          `Ocorreu um erro ao tentar processar a solicitação: ${err}`,
        ),
      );
  };

  return (
    <TouchableOpacity onPress={() => efetuarConfirmacao(props.id_autorizacao)}>
      <View style={styles.container}>
        <View style={styles.dadosEmpresa}>
          <Text>
            Filial: {props.id_filial} - {props.razao_social}
          </Text>
        </View>
        <View style={styles.dadosSolicitacao}>
          <Text>Data: {dataFormatada}</Text>
          <Text>
            Usuário: {props.id_usuario}-{props.usuario}
          </Text>
        </View>
        <Text>Operação: {props.operacao}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  dadosEmpresa: {
    flex: 1,
    flexDirection: 'column',
  },
  dadosSolicitacao: {
    flex: 1,
  },
});
