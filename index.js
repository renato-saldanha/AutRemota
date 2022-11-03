import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import Config from './src/classes/Config';
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => {
  return (
    <Provider store={store}>
      <Config />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Redux);
