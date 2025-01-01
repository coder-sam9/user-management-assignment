import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import {store as storea} from './src/redux/store';

const App = () => (
  <Provider store={storea}>
    <AppNavigator />
  </Provider>
);

export default App;
