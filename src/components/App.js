import React from 'react';
import {increment,decrement} from '../actions/action';
import ReactRedux from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers/index';
import {Provider,connect} from 'react-redux';
function App() {

  const store = createStore(countReducer);
  const initialState = {
    count: 0,
  };

  return (
    <div id='main'>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div> 
  );
}

export default App;





// connected component
const Counter = connect(mapCount, { inc, dec })(props => (
	<div data-testid='counter'>Count: {props.count} <button onClick={props.inc} >+</button> <button onClick={props.dec}>-</button></div>
));

