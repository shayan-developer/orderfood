import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateProvider from './components/Context/Store';
import { initailstate, reducer } from './components/Context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initailState={initailstate}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

