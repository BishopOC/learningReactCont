import React from 'react';
import {render} from 'react-dom';

var destination = document.querySelector('#container');



class Label extends React.Component {
  render () {
    var labelStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      textAlign: 'center'
    };
    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
};

class Square extends React.Component {
  render () {
    var squareStyle = {
      height: '150px',
      backgroundColor: this.props.color
    };
    return (
      <div style={squareStyle}>
      </div>
    );
  }
};

class Card extends React.Component {
  render () {
    var cardStyle = {
      height: '200px',
      width: '150px',
      backgroundColor: '#FFF',
      padding: '0px',
      margin: '2em',
      WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
      filter: 'drop-shadow(0px 0px 5px #666)'
    };
    return (
      <div style = {cardStyle}>
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    );
  }
};
render(
  <div>
    <Card color="#FFA737"/>
  </div>,
  destination
);
