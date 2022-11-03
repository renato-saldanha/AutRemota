import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export class Configuracao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servidor: props.servidor,
    };
  }

  componentDidMount() {
    console.log('Configuracao DidMount: ' + this.props.route.params.servidor);
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.campoTexto}
          placeholder="Insira o ip do servidor"
          onChangeText={servidor => this.setState(servidor)}
        />
      </View>
    );
  }
}

export default Configuracao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  campoTexto: {
    margin: 25,
    marginLeft: 9,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
