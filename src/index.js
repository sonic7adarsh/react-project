import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducer/auth'
import productReducer from './store/reducer/product'
import signupReducer from './store/reducer/signup'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 


const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    signup: signupReducer
});


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
) 

ReactDOM.render(app,document.getElementById('root')
);

serviceWorker.unregister();
