import React from 'react';
import {increment,decrement} from '../actions/action';
import ReactRedux from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers/index';
import {Provider,connect} from 'react-redux';
import {inc,dec} from '../actions/action';
function App() {

  const store = createStore(reducer);
  

  return (
    <div id='main'>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div> 
  );
}

export default App;



const mapCount = state => ({ count: state.count });


// connected component
const Counter = connect(mapCount, { inc, dec })(props => (
	<div data-testid='counter'>
         <button onClick={props.inc} >+</button> 
          Count: {props.count}
        <button onClick={props.dec}>-</button>
        </div>
));

