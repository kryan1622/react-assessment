import React, { Component } from 'react';
import Axios from 'axios';
import {Table} from 'reactstrap';

export default class Find extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

componentDidMount(){
    this.makerequest();
}

    makerequest = () => {
        Axios.get("http://localhost:5000/user/all")
        .then(response => {
            this.setState({
                data:response.data
            });
        }).catch(error => {console.log(error.message)});
    }

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <h1> All Users </h1>
                <br></br>
                <br></br>
                <br></br>
                <h4>Usernames</h4>
                <Table>
                    <tbody>
           {this.state.data.map(item => (
            <tr><td>  {item.username}  </td></tr>
           ))}
            </tbody>
            </Table>
            </div>
        )
    }
}