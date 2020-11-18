import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
         count : 0
        };
        this.Reset= this.Reset.bind(this)
    }
    Increment(){
        this.setState({
        count : this.state.count + 1
    })
        console.log(this.state.count);    
    }

    Decrement(){
        this.setState({
        count : this.state.count - 1
    })
        console.log(this.state.count);    
    }

    Reset(){
        this.setState({
        count : this.state.count = 0
    })
        console.log(this.state.count);    
    }



    render() {
        // console.log(this.state.count);
        return (
            <div className = "counter">
                <h1>Count : {this.state.count}</h1> 
                <div>
                    <button onClick = {() =>this.Increment()}>Increment</button>
                    <button onClick = {() =>this.Decrement()}>Decrement</button>
                    <button onClick = {this.Reset}>Reset</button>
                </div>     
            </div>
        );
    }
}

export default Counter;