import React, { Component } from 'react'


export default class Login extends Component {
  state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  send=()=>{
    fetch("http://localhost:5000/store"),{username:this.state.username,password:this.state.password}    
      .then((res)=>{
        console.log(res)
      })
  }
  render() {
    return (
      <div>[12:08 PM, 6/7/2023] Sunny: <p><input placeholder="username" onChange={this.handleChange} name="username"/></p>
      <p><input placeholder="password" onChange={this.handleChange} name="password"/></p>
      <button onClick={this.send}>Login</button>
    </div>
  )
}
}
