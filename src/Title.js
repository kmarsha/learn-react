import React from 'react';

class Title extends React.Component {
  constructor(){
      super();
      this.state = {
          title: "Aplikasi React Pertamaku",
          subTitle: "Dibuat dengan hati haha",
          name: "Maccaa",
          counter: 0,
      };
      this.props = {
        name: 'apaya' //props can't change
      }
      
      this.increment = () => {
        this.setState({
            counter: this.state.counter+1 //changing the value of state (counter)
        });
      }
  }

  render(){
      return(
          <div>
              <h1>{this.state.title}</h1>
              <p>{this.state.subTitle}</p>
              <p>My Name is {this.props.name}</p>
              <p>Counter: {this.state.counter}</p>
              <button onClick={this.increment}>Increment</button>
          </div>
      );
  }
}

export default Title;