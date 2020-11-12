import React, { Component } from 'react';

class Todos2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }
    render() {
        return (
            <div className = "todos2">
                <input type = "text" placeholder = "Add new element"/>
                <button type = "submit">Add</button>
                <div>
                <input type = "text" placeholder = "Search element"/>
                <button type = "submit">Search</button>
                </div>
                
            </div>
        );
    }
}

export default Todos2;