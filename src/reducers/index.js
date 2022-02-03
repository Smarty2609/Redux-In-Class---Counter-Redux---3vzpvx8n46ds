
// const countReducer = (state = 0, action) =>{
//    switch(action.type){ 
//     case 'INCREMENT':
//        return state + 1;
    
//     case 'DECREMENT':
//        return state - 1;
    
//    default:
//       return state;
//   }
// };
//   export default countReducer;

const reducer = (state = initialState, action) => {
	switch(action.type) {
  	case 'INCREMENT':
    	return Object.assign({}, state, { count: state.count + 1 });
  	case 'DECREMENT':
    	return Object.assign({}, state, { count: state.count - 1 });
  }
  return state;
}
const mapCount = state => ({ count: state.count });

export default reducer;
export mapCount;
