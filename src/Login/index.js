import React, { Component } from 'react';
// component is called destructuring -- es6 destructuring
// now we have component in a varaible otherwise we would have to do React.Component

class Login extends Component {
    constructor() {
        // calling super allows you to use this inside constructor
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        // e.target.value e.target.name
        // computed properties. new version of es6
        this.setState({[e.target.name]: e.target.value });
        // shorthand for 
        // var someObject = {}
        // someObject[username]= e.target.username
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // we are calling the login function that we created in App.js and we sent down as props in order to lift our state
           this.props.login(this.state.username)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.username} name="username" placeholder="username"/>
                <input type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>

        )
    }
}

export default Login;
