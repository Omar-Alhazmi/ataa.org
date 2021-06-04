import React, { Component } from 'react'
import '../styles/heder.css';
import logo from '../../image/logo.ico';
export default class Heder extends Component {
  constructor(props) {
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
        <div className={toggle == true ? "responsive topnav" : "topnav"}>
          <div className="logoContainer"> <img src={logo} class="logo" /></div>
          <div className="barContent">
            <a href="#home" className="active">الرئيسية</a>
            <a href="#news">عن الجمعية</a>
            <a href="#contact">الاخبار</a>
            <a href="#contact">الفرق التطوعية</a>
            <a href="#contact">السياسات والحوكمة</a>
            <div className="dropdown">
              <button className="dropbtn">تسجيل الدخول
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>
          <a className="icon" onClick={() => this.togglehandler()} >&#9776;</a>
        </div>
      </div>
    )
  }
}
