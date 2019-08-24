import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

var config = {
  apiKey: 'AIzaSyDKRjElKWwcW9RGWTqjjAeMPyDXDY3ew5E',
  authDomain: 'catem2pointoh.firebaseapp.com',
  databaseURL: 'https://catem2pointoh.firebaseio.com',
  projectId: 'catem2pointoh',
  storageBucket: '',
  messagingSenderId: '807684499073',
  appId: '1:807684499073:web:64cf00c25b68b4ef',
};

firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// var config = {
//   apiKey: 'AIzaSyDKRjElKWwcW9RGWTqjjAeMPyDXDY3ew5E',
//   authDomain: 'catem2pointoh.firebaseapp.com',
//   databaseURL: 'https://catem2pointoh.firebaseio.com',
//   projectId: 'catem2pointoh',
//   storageBucket: '',
//   messagingSenderId: '807684499073',
//   appId: '1:807684499073:web:64cf00c25b68b4ef'
// };

// firebase.initializeApp(config);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
