import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import manageStudentInput from './reducers/manageStudentInput'

// need to troubleshoot importing rootReducer
  // import rootReducer from './reducers/rootReducer'


const store = createStore(manageStudentInput, applyMiddleware(thunk))
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


