import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        num: 0
    }
  }

  render = () => {
    if (this.props.inview) {
        return (
            <div className="App">
              <button onClick = {this.increment}>Increment</button>
              <h1>Counter: {this.state.num}</h1>
            </div>
          );
    }
    else {
        return (<h1>No counter</h1>)
    }
    
    }
    increment = () => {
        this.setState({
            num: this.state.num + 1
        });
    }

}

export default Counter;
