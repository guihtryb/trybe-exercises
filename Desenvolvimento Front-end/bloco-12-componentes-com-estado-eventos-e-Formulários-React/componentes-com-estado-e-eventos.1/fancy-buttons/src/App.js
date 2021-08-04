import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.changeBackGroundColor = this.changeBackgroundColor(this); 
    this.state = {
      numeroDeClicks: 0,
      backgroundColor: 'white',
    };
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1,
    }));  
  };

  changeBackgroundColor(numDeClicks) {
    return numDeClicks % 2 === 0 && numDeClicks !== 0 ? 'green' : 'white'
  }

  render() {
    const { numeroDeClicks } = this.state
    return(
      <button style={{background: this.changeBackgroundColor(numeroDeClicks)}}  onClick={this.handleClick}>Try it!: { numeroDeClicks }</button>
    );
  }
};

export default App;
