import React from 'react';
import ReactDOM, {render} from 'react-dom';



var destination = document.querySelector('#container');

// class LightningCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.timerTick = this.timerTick.bind(this);
//     this.state = {
//       strikes: 0
//     }
//   }
//   timerTick(){
//     this.setState({
//       strikes: this.state.strikes + 1
//     });
//   }
//   componentDidMount(){
//     setInterval(this.timerTick, 1000);
//   }
//   render(){
//     return (
//       <h1>{this.state.strikes}</h1>
//     );
//   };
// };
//
// class LightningCounterDisplay extends React.Component {
//   render(){
//     var divStyle = {
//       width: '250px',
//       textAlign: 'center',
//       backgroundColor: 'black',
//       padding: '40px',
//       fontFamily: 'sans-serif',
//       color: '#999',
//       borderRadius: '10px'
//       }
//     return (
//       <div style={divStyle}>
//       <LightningCounter/>
//       </div>
//     )
//   }
// }


// class Circle extends React.Component {
//
//   render(){
//     var circleStyle = {
//       padding: '10px',
//       margin: '20px',
//       display: 'inline-block',
//       backgroundColor: this.props.bgColor,
//       borderRadius: '50%',
//       width: '100px',
//       height: '100px'
//     };
//     return (
//       <div style = {circleStyle}>
//       </div>
//     );
//   }
// }
//
//
//   var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
//   var renderData = [];
//
//   for(var i = 0; i < colors.length; i++){
//     var color = colors[i];
//     renderData.push(<Circle key={i + color} bgColor={colors[i]}/>)
//   }

class Counter extends React.Component {
  render(){
    var textStyle = {
      fontSize: '72px',
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold'
    };
    return (
      <div style = {textStyle}>
        {this.props.display}
      </div>
    );
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Get Default Props');
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    console.log('Get initial State');
    this.state = {
      count: 0
    }
  }
  increase(e) {
    var currentCount = this.state.count;
    if(e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({
      count: currentCount
    });
  }
  componentWillUpdate(newProps, newState) {
      console.log("componentWillUpdate: Component is about to update!");
  }
  componentDidUpdate(currentProps, currentState) {
      console.log("componentDidUpdate: Component just updated!");
  }
  componentWillMount() {
      console.log("componentWillMount: Component is about to mount!");
  }
  componentDidMount() {
      console.log("componentDidMount: Component just mounted!");
  }
  componentWillUnmount() {
      console.log("componentWillUnmount: Component is about to be removed from the DOM!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate: Should component update?");
    if (newState.count < 5) {
      console.log("shouldComponentUpdate: Component should update!");
      return true;
    } else {
      ReactDOM.unmountComponentAtNode(destination);
      console.log("shouldComponentUpdate: Component should not update!");
      return false;
    }
}
componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps: Component will get new props!");
  }
  decrease(e){
    var currentCount = this.state.count;
    if(e.shiftKey) {
      currentCount -= 10;
    } else {
      currentCount -= 1;
    }
    this.setState({
      count: currentCount
    });
  }
  render (){
    var backgroundStyle = {
      padding: '50px',
      backgroundColor: '#FFC53A',
      width: '250px',
      height: '100px',
      borderRadius: '10px',
      textAlign: 'center'
    };

    var buttonStyle = {
      fontSize: '1em',
      width: '30px',
      height: '30px',
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold',
      lineHeight: '3px',
      borderRadius:'5px',
      margin: '5px',
      borderStyle: 'none',
      backgroundColor: 'lightblue',
      border: 'solid 2px black'
    };
    var buttonActive = {
      backgroundColor: 'green'
    }

    var buttonDisplay = {
      display: 'inline-block'
    }

    return(
      <div style={backgroundStyle}>
        <Counter display={this.state.count}/>
        <div style={buttonDisplay}>
          <button onClick={this.increase} style={buttonStyle}>+</button>
          <button onClick={this.decrease} style={buttonStyle}>-</button>
        </div>
      </div>
    );
  }
}

render(
  <div>
    <CounterParent/>
  </div>,
  destination
);
