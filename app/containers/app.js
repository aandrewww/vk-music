import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Scene, Router } from 'react-native-router-flux';

import * as reducers from '../reducers';
import Main from './main';
import About from './about';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const RouterRedux = connect()(Router)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux hideNavBar={true}>
          <Scene
            key="main"
            component={Main}
            title="Main"/>  
          <Scene
            key="about"
            component={About}
            title="About"/>
        </RouterRedux>
      </Provider>
    );
  }
}