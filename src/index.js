import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import countReducer from './reducers/index';

const store = createStore(countReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> 
    ,
  document.getElementById('root')
);

