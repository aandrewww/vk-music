import React, {Component} from 'react';

import { Provider, connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

import configureStore from '../store/configureStore';

import App from './App'
import Landing from './Landing';
import MyAudios from './MyAudios';
import About from './About';

const RouterRedux = connect()(Router);

const store = configureStore();

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RouterRedux hideNavBar>
          <Scene key="root" component={App}>
            <Scene
              key="landing"
              component={Landing}
              title="Landing" />
            <Scene
              key="myAudios"
              component={MyAudios}
              title="My Audios"/>
            <Scene
              key="about"
              component={About}
              title="About"/>
          </Scene>
        </RouterRedux>
      </Provider>
    )
  }
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

export default Root
