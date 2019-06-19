import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './template/desktop/layout/main';
import * as serviceWorker from './serviceWorker';
// Store
import { createStore, applyMiddleware, compose } from 'redux';
import initReducer from './reducers/initReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    initReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
