import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import repositoryReducer from './store/reducers/repositoryReducer';
import errorHandlerReducer from './store/reducers/errorHandlerReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const rootReducers = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer
})

//ReactDOM.render(<App />, document.getElementById('root'));

// const store = createStore(rootReducers, 
//     applyMiddleware(thunk)
//     );

    //新增Redux DevTools Extension
     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
     const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
        applyMiddleware(thunk)
      ));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
