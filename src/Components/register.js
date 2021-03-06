import React, { Component } from 'react';
import { Input, Form, Label, FormGroup, FormText } from 'reactstrap';

import Axios from 'axios';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            error: "",
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        const newItem = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            password2: event.target[3].value
        }

        Axios.post("http://localhost:5000/user/createuser", newItem)
            .then(response => {
                if (newItem.username === "" || newItem.email === "" || newItem.password === "" || newItem.password2 === "" || newItem.password !== newItem.password2) {
                   console.log(response);
                    this.setState({ 
                        error1: response.data.email, 
                        error2:response.data.username,
                        error3:response.data.password,
                        error4: response.data.password2  })
                } else {
                    if(response.data.email ==="Email is invalid"){
                    this.setState({ error: response.data.email})
                    }else{
                    this.setState({error: response.data.Status})
                    }
                }
            });
    }



    render() {

        return (
            <div className="container">
                <br></br>
                <br></br>
                <h4> Create New User </h4>
                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <Label>
                        Username

            </Label>
                    <Input type="text"></Input>
                    <p style={{ color: 'red' }}>{this.state.error1}</p>
                    <Label>
                        Email
            </Label>
                    <Input type="text"></Input>
<p style={{ color: 'red' }}>{this.state.error2}</p>
                     <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" />
        </FormGroup>
        <p style={{ color: 'red' }}>{this.state.error3}</p>
        <FormGroup>
          <Label for="Password">Re-enter Password</Label>
          <Input type="password" />
        </FormGroup>
        <p style={{ color: 'red' }}>{this.state.error4}</p>
    
                    <p style={{ color: 'red' }}>{this.state.error}</p>                
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Create;

