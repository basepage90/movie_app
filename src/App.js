// import PropTypes from "prop-types"
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("construcotr")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  state = {
    count: 0
  }
  
  // good code : current
  add = () => {
    this.setState(current => ({count: current.count + 1 }) );
  };

  // bad code : sate 를 이런식으로 가져오는것은 외부 state 에 의존적이므로 좋은 코드가아니다.
  minus = () => {
    this.setState({count: this.state.count-1});
  };
  render(){
    console.log("render")
    return (
      <div>
        <h2> Number is : {this.state.count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
