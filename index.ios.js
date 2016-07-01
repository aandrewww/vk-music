'use strict';

import React, {
  AppRegistry
} from 'react-native';

import App from './app/containers/app.js';

const vkPlayer = () => {
  return (
    <App />
  );
}

AppRegistry.registerComponent('vkMusic', () => App);
