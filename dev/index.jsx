import React from 'react';
import {render} from 'react-dom';

class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: '10px',
      margin: '10px',
      backgroundColor: this.props.bgcolor,
      color: '#333',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '32px',
      textAlign: 'center'
    };
    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
};

var destination = document.querySelector('#container');

render(
  <div>
  <Letter bgcolor="#58B3FF">A</Letter>
  <Letter bgcolor="#FF605F">E</Letter>
  <Letter bgcolor="#FFD52E">I</Letter>
  <Letter bgcolor="#49DD8E">O</Letter>
  <Letter bgcolor="#AE99FF">U</Letter>
  </div>,
  destination
);
