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
// function btn1()
// {
// document.getElementsByClassName("btn1").style.color = "green";
// }
    render() {
        console.log(this.state.data);
        return (
                <div className="todos1">
                    <h1>todos</h1>
                    <Todos2 />
                    {
                        this.state.data &&
                        this.state.data.map(e =>{
                        return <div key={e.id}>{e.title}
                        <button className = "btn1" type = "button" onClick="btn1()">Completed</button>
                        <button type = "button">Pending</button>
                        </div>
                        
                        })
                    }
                    
                </div>
            );
    }
}

export default Todos1;
