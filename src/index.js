//DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

//SERVICE WORKER
import registerServiceWorker from './registerServiceWorker';

//RENDER
ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
