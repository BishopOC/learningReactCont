import React from 'react';
import {render} from 'react-dom';

var destination = document.querySelector('#container');

class LightningCounter extends React.Component {
  constructor(props) {
    super(props);
    this.timerTick = this.timerTick.bind(this);
    this.state = {
      strikes: 0
    }
  }
  timerTick(){
    this.setState({
      strikes: this.state.strikes + 1
    });
  }
  componentDidMount(){
    setInterval(this.timerTick, 1000);
  }
  render(){
    return (
      <h1>{this.state.strikes}</h1>
    );
  };
};

class LightningCounterDisplay extends React.Component {
  render(){
    var divStyle = {
      width: '250px',
      textAlign: 'center',
      backgroundColor: 'black',
      padding: '40px',
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: '10px'
      }
    return (
      <div style={divStyle}>
      <LightningCounter/>
      </div>
    )
  }
}

render(
  <div>
    <LightningCounterDisplay/>
  </div>,
  destination
);
