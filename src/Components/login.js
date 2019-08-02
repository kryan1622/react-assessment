import React, { Component } from 'react';
import { Input, Form, Label, FormGroup, FormText } from 'reactstrap';
import Axios from 'axios';

class Login extends Component {

  constructor() {
        super();
        this.state = {
            message: "",
        }
    }


handleSubmit = (event,res) => {
        event.preventDefault();
        const Login = {
            username : event.target[0].value,
            password: event.target[1].value
        }

         if ( Login.username === "" || Login.password === "" ){
        this.setState({message:"Please fill in all fields"})
    }else{
       Axios.get("http://localhost:5000/user/name/" + Login.username + "/" + Login.password)
            .then(response => {
                console.log(response.data.Status)
             this.setState({message: response.data.Status})

            }).catch(error => {console.log("your wrong")});
    }
        
    };

    render() {
        return (
        <div className="container">
                <br></br>
                <br></br>
                <h4> Login </h4>
                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <Label>
                        Username

            </Label>
                    <Input type="text"></Input>
                    <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" />
        </FormGroup>                 
                    <br></br>
                    <p style={{color: 'red'}}>{this.state.message}</p>
                    <input type="submit" name="clickme" value="Submit" />
                </form>
            </div>    
        )
    }
}

export default Login;