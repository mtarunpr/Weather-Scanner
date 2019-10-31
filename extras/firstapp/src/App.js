import React from 'react';
import Counter from "./Counter.js"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inview: true
    }
  }

  render = () => {
    return (
      <div className="App">
        <h1>Helloooo, World!</h1>
        <button onClick={this.toggle}>Toggle Counter</button>
        <Counter inview={this.state.inview}/>
      </div>
    );
  }

  toggle = () => {
    this.setState({
      inview: !this.state.inview
    });
  }
}

export default App;
