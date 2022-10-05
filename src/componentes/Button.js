import React, {Component} from 'react';
import {Button} from 'react-native';

class Botao extends Component {
  constructor(key, title, color, OnPress) {
    this.key = key;
    this.title = title;
    this.color = color;
    this.OnPress = OnPress;
  }

  render() {
    <Button
      title={this.title}
      color={this.color}
      key={this.key}
      onPress={this.OnPress}
    />;
  }
}

export default Botao;
