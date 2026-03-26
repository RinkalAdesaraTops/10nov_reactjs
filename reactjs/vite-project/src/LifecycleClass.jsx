import React, { Component } from "react";

class LifecycleClass extends Component {
  constructor() {
    console.log("constructor called..");
    super();
    this.state = {
      name: "abc",
      age: 25,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called..");
    setTimeout(() => {
      this.setState({
        name: "test",
      });
    }, 2000);
  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps called.');
    console.log("state is ");
    console.log(state);
    return null
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called..');   
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('prev state is --');
    console.log(prevState);
    return null   
  }
  componentDidUpdate(){
    console.log('Finally value updated...');
    
  }
  render() {
    console.log("render called...");

    return (
      <div>
        <h3>Lifecycle Example</h3>
        <h4>
          Name & age is -- {this.state.name}---{this.state.age}
        </h4>
      </div>
    );
  }
}
export default LifecycleClass;
