import React, {Component} from 'react';
import { Provider } from 'react-redux'
import RootNavigation from './src/navigations/'
import store from './src/store/store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}