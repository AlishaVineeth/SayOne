/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '../ToggleImageRedux/src/store/storeIndex'
import Component1 from './src/component/Component1'


export default class App extends Component {
  
   
  render() {
     
    return (
      <Provider store = {store}>
        <Component1 />
      </Provider>
    );
  }
}

