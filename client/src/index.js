import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import {store} from './_helpers';
import {App} from './App/app';

// setup fake backend
import {configureFakeBackend} from './_helpers';

configureFakeBackend();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);