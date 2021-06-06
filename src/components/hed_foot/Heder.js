import React, { Component } from "react";
import "../styles/heder.css";
import logo from "../../image/logo.ico";
import Home from "../home/Home";
import About from "../abuot/About";
import News from "../news/NewsContainer";
import Polices from "../polices/Polices";
import Teams from "../teams/TeamsContainer";
import Login from "../login_reg/LoginContainer";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Heder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  togglehandler() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  render() {
    const toggle = this.state.toggle;
    return (
      <Router>
        <>
        <div className={toggle === true ? "responsive topnav" : "topnav"}>
          <div className="logoContainer">
            <img src={logo} className="logo" alt="ll"/>
          </div>
          <div className="barContent">
            <Link to={"/"} className="active">
              الرئيسية
            </Link>
            <Link to={'/About'}>عن الجمعية</Link>
            <Link to={'/News'}>الاخبار</Link>
            <Link to={'/Teams'}>الفرق التطوعية</Link>
            <Link to={'/Polices'}>السياسات والحوكمة</Link>
            <div className="dropdown">
            <Link to={'/Login'}> <button className="dropbtn">
                تسجيل الدخول
                <i className="fa fa-caret-down"></i>
              </button></Link>
            </div>
          </div>
        <button className="icon" onClick={() => this.togglehandler()}> &#9776;</button>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/About' >
            <About />
          </Route>
          <Route exact path='/News'>
            <News />
          </ Route>
          <Route exact path='/Teams'>
            <Teams />
          </Route>
          <Route exact path='/Polices'>
            <Polices />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
        </Switch>
        </>
      </Router>
    );
  }
}
