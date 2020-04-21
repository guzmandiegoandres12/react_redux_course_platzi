import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/App';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers/Reducer';
import reduxThunk from 'redux-thunk';
//import * as serviceWorker from './serviceWorker';
// reducers ,initial store
const store=createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
