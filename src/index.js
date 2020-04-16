// provides react functions, including .createElement(), which allows us to use JSX and transform it into HTML
import React from 'react';

// provides DOM-specific functions such as .render(), which allow JSX components to be rendered on the DOM
import ReactDOM from 'react-dom';

// enables the redux store and dispatch actions to be passed down to any component wrapped in the connect function
import { Provider } from 'react-redux';
// imports the createStore function, which includes the getState and dispatch functions.
// the middleware allows us to use Thunk to manage the asynchronous fetch calls
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// imports bootstrap-react css
import 'bootstrap/dist/css/bootstrap.min.css';
// imports custom css for the index.js file
import './index.css';

// allows us to render the app component on the DOM, which includes the high-level container for the app
import App from './containers/App';
// allows us to pass in the root reducer to the createStore function so that the store has access to all actions
import rootReducer from './reducers/rootReducer'

// creating the redux store, which will have access to all individual reducers and the thunk middleware to manage fetches
const store = createStore(rootReducer, applyMiddleware(thunk))

// renders the App Container on the DOM at the div#root, which is wrapped in the redux store.
// All child containers/components will have access to the store by using the connect function
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


