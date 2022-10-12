import React from 'react';

let x = 0;
class LifeCycle extends React.Component{
  //lifecyle only available for class component

  componentDidMount() { //when the component is render
  //   x += 3; //not work?
    alert('rendered on ' + x++ + ' times'); 
  }
  
  state = {
    counter: 1
  }

  componentDidUpdate() { //when the component is updated
    // alert("Number of click: " + this.state.counter) //not work on me
    alert("Number of click: " + this.props.counter) //working with props when it changed on App.js
  }

  render() {
    return 'hei'
  }
}

export default LifeCycle;