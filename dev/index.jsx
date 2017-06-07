import React from 'react';
import {render} from 'react-dom';

var destination = document.querySelector('#container');

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
class Label extends React.Component {
  render () {
    var labelStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      textAlign: 'center'
    };
    return (
      <p style={labelStyle}>{this.props.colorName}</p>
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
        <Square {...this.props}/>
        <Label {...this.props}/>
      </div>
    );
  }
};

class Inline extends React.Component {
  render (){
    var inlineStyle = {
      display: "inline-block"
    }
    return (
      <div style = {inlineStyle}>
        <Card {...this.props}/>
      </div>
    )
  }
}
render(
  <div>
    <Inline color="#FFA737" colorName="Orange"/>
    <Inline color="blue" colorName="Blue"/>
    <Inline color="chartreuse" colorName="Chartreuse"/>
    <Inline color="red" colorName="Red"/>
    <Inline color="orange" colorName="Orange"/>
    <Inline color="lightBlue" colorName="Light Blue"/>
  </div>,
  destination
);
