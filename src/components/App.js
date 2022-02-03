import React from 'react';
import '../styles/App.css';
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
	<div >
         <button onClick={props.inc} >+</button> 
         <span data-testid='counter'> Count: {props.count}</span>
        <button onClick={props.dec}>-</button>
        </div>
));

