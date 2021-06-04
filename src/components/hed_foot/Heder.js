import React, { Component } from 'react';
import '../styles/heder.css';
import logo from '../../image/logo.ico';
import Home from '../home/Home'
import { Route, HashRouter, Link, Switch } from "react-router-dom";

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
      <HashRouter>
        <div className={toggle == true ? "responsive topnav" : "topnav"}>
          <div className="logoContainer"> <img src={logo} class="logo" /></div>
          <div className="barContent">
            <Link to="/" className="active">الرئيسية</Link>
            <Link to="#news">عن الجمعية</Link>
            <Link to="#contact">الاخبار</Link>
            <Link to="#contact">الفرق التطوعية</Link>
            <Link to="#contact">السياسات والحوكمة</Link>
            <div className="dropdown">
              <button className="dropbtn">تسجيل الدخول
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>
          <Link className="icon" onClick={() => this.togglehandler()} >&#9776;</Link>
        </div>
        <Switch>
          <Route
            exact={true}
            path="/"
            component={Home}
          ></Route>
          {/* <Route
            path="/StudentHeader/StudentProfile"
            component={StudentProfile}
          ></Route>
          <Route
            path="/StudentHeader/StudentProfile"
            component={StudentHome}
          ></Route>
          <Route
            path="/StudentHeader/displayAllTable"
            component={displayAllTable}
          ></Route> */}
        </Switch>
      </HashRouter>
      
    )
  }
}
