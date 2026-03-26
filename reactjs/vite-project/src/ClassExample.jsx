import React, { Component } from "react";

class ClassExample extends Component {
    constructor(props){
        super()
        this.state = {
            count:0,
            name:props.name
        }
    }
    addCounter = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
        <div>
            <h3>Class Component Example</h3>
            <h4>Name is -- {this.state.name}</h4>
            <h4>Count is -- {this.state.count}</h4>
            <button onClick={this.addCounter}>Add</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>Minus</button>
        </div>
    )
  }
}

export default ClassExample
