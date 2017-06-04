import React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component {
  render () {
      return (
        <div>
          <p>Hello, {this.props.greetTarget}!</p>
        </div>
    );
  }
};

class Buttonify extends React.Component {
  render(){
    return (
      <button type={this.props.behavior}>{this.props.children}</button>
    );
  }
};

render (
  <div>
    <HelloWorld greetTarget='Bishop'/>
    <Buttonify behavior='Submit'>This is a test button, a long test button.</Buttonify>
  </div>, document.getElementById('container'));
