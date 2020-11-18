import React, { Component } from 'react';
import Todos2 from "./Todos2";
import axios from "axios";
class Todos1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount()
    {
        let res = axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res =>{
            return res.data;
        }).then(
            result =>{
                console.log(result);
                this.setState({data: result});
            },
            error =>{
                this.setState({error});
            }
        )
        console.log("Result = ", res);
        // this.setState({})
    }

handleDelete = ele =>{
    let index = this.state.data.map(e=> e.username).indexOf(ele.username);
    this.setState({
        data : [
            ...this.state.data.slice(0,index),
            ...this.state.data.slice(index + 1)
            ]
        });
}

handleClick = ele =>{
    console.log(ele);
    let index = this.state.data.map(e => e.username).indexOf(ele.username);
    this.setState({
        data:[
            ...this.state.data.slice(0,index),
            {...ele, name: "Raj Kumar"},
            ...this.state.data.slice(index + 1)
        ]
    });
}

handleChange = e =>{
    this.setState({name:e.target.value});
};
handlesubmit = e => {
    e.preventDefault();
    this.setState({data: [...this.state.data, {name:this.state.name}]});
}

    render() {
        console.log(this.state.data);
        return (
                <div className="todos1">
                    <h1>todos</h1>
                    <Todos2 />
                    {
                        this.state.data &&
                        this.state.data.map(e =>{
                        return <div 
                        key={e.id}
                        className="main_div"
                        >
                            {e.title}
                        <span className = "Todobutton">
                        {/* <button className = "btn1" type = "button" onClick="btn1()">Completed</button> */}
                        <button className = "btn1" type = "button" onClick={this.handleClick}>Update</button>
                        <button className = "btn1" type = "button" onClick={this.handleDelete}>Delete</button>
                        </span>
                        </div>
                        
                        })
                    }
                    
                </div>
            );
    }
}

export default Todos1;
