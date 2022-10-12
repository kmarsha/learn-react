import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {connect} from 'react-redux';

function incrementCounter(num) { //action creator
  return {
    type: 'INCREMENT',
    num: num,
  }
}

const initialState = {
  count: 2,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.num
      };
      default:
        return state;
  }
}

function ReduxCounter(props) {
  function handleClick() {
    props.incrementCounter(3);
  }

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

function mapStateToProps(state) { //selecting part of data 
  return {
    count: state.count
  };
}
const mapDispatchToProps = { // dispatching function
  incrementCounter
}

const store = configureStore({reducer: reducer});

const Counter = connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

function TheCounter() {
  return(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

// export default ReduxCounter;
export default TheCounter;