import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './containers/Main';

function App() {
  return (
    <Provider store={store}>
      <MainPage />  
    </Provider>
  );
}

export default App;
