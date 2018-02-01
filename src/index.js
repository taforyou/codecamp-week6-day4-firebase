import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCi0xKqW0py3rz83QiLMd2M4Ab4DovcYio",
    authDomain: "codecamp-week6.firebaseapp.com",
    databaseURL: "https://codecamp-week6.firebaseio.com",
    projectId: "codecamp-week6",
    storageBucket: "codecamp-week6.appspot.com",
    messagingSenderId: "55960876635"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
