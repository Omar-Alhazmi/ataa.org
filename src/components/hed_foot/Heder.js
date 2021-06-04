import React, { Component } from 'react'
import   '../styles/heder.css';
import logo from '../../image/logo.ico';
export default class Heder extends Component {
    constructor(props){
        super(props);
        this.state = {
           toggle: false,
        };
    }
    togglehandler() {
        this.setState({
           toggle: !this.state.toggle
        })
     }
    render() {
         const toggle = this.state.toggle
        return (
            <div>
<div className ={toggle == true ? "responsive topnav" : "topnav" }>
       <div className="logoContainer"> <img src={logo} class="logo" /></div>
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  <a  className="icon" onClick={()=>this.togglehandler()} >&#9776;</a>
</div>
            </div>
        )
    }
}
