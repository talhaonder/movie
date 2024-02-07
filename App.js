// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
