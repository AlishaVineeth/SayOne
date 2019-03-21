/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { createAppContainer} from 'react-navigation'; 

import { Provider } from 'react-redux'
import store from './app/store'
import RootStack from './app/Navigation/appNavigation'

const AppContainer = createAppContainer(RootStack);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
    <AppContainer />
      </Provider>
    );
  }
}

export default App

