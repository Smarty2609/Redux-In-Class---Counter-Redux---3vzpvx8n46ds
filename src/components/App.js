import React from 'react';
import {increment,decrement} from '../actions/action';
import {useSelector,useDispatch} from 'react-redux';

function App() {

 const counter = useSelector(state => state);
 const dispatch = useDispatch();
  return (
    <div id='main'>
      <h2 data-testid='counter'>{counter}</h2>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div> 
  );
}

export default App;
