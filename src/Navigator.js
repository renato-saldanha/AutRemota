import React, {Component, setState} from 'react';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListaAutorizacao from './screens/ListaAutorizacao';
import Login from './screens/Login';
import Configuracao from './screens/Configuracao';

import {mostrarErro, sucesso} from './common';

const StackPrincipal = createNativeStackNavigator();

const Navigator = props => {
  const {params} = useRoute;
  console.log('Nav params:' + params);

  return (
    <NavigationContainer>
      <StackPrincipal.Navigator
        initialRouteName={
          null === null
            ? 'Login'
            : 'Configuracao'
        }
        screenOptions={styles.esconderHeader}>
        <StackPrincipal.Screen
          name="Login"
          component={Login}
          options={styles.esconderHeader}
          // initialParams={{servidor: this.props.servidor}}
        />
        <StackPrincipal.Screen
          name="ListaAutorizacao"
          component={ListaAutorizacao}
          options={styles.esconderHeader}
          // initialParams={{servidor: this.props.servidor}}
        />
        <StackPrincipal.Screen
          name="Configuracao"
          component={Configuracao}
          options={{
            headerShown: true,
            headerRight: () => (
              <Button title="Gravar" onPress={() => console.log('NAV')} />
            ),
          }}
          // initialParams={{servidor: this.props.servidor}}
        />
      </StackPrincipal.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  esconderHeader: {
    headerShown: false,
    backgroundColor: '#EEE',
  },
});
