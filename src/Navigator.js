import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListaAutorizacao from './componentes/ListaAutorizacao';
import Login from './componentes/Login';

const StackPrincipal = createNativeStackNavigator();

export default props => {
  return (
    <NavigationContainer >
      <StackPrincipal.Navigator
        initialRouteName="Login"
        screenOptions={styles.esconderHeader}>
        <StackPrincipal.Screen
          name="Login"
          component={Login}
          options={styles.esconderHeader}
        />
        <StackPrincipal.Screen
          name="ListaAutorizacao"
          component={ListaAutorizacao}
          options={styles.esconderHeader}
        />
      </StackPrincipal.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  esconderHeader: {
    headerShown: false,
    backgroundColor: '#EEE',
  },
});
