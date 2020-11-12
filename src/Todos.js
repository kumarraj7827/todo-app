import React, { Component } from 'react';
import axios from "axios";
class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount()
    {
        let res = axios.get("https://jsonplaceholder.typicode.com/Users")
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

    render() {
        console.log("RENDER");
        console.log(this.state.data);
        return (
            <div className="todo">
                <h1>Users</h1>
                {
                    this.state.data &&
                    this.state.data.map(e =>{
                    return <div key={e.id}>{e.name}</div>
                    })
                }
                
            </div>
        );
    }
}

export default Todos;