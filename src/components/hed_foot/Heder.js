import React, { Component } from "react";
import "../styles/heder.css";
import logo from "../../image/logo.ico";
import Home from "../home/Home";
import About from "../abuot/About";
import NewsContainer from "../news/NewsContainer";
import Polices from "../polices/Polices";
import Teams from "../teams/TeamsContainer";
import LoginContainer from "../login_reg/LoginContainer";

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
      toggle: !this.state.toggle,
    });
  }
  render() {
    const toggle = this.state.toggle;
    return (
      <HashRouter>
        <div className={toggle === true ? "responsive topnav" : "topnav"}>
          <div className="logoContainer">
            <img src={logo} class="logo" />
          </div>
          <div className="barContent">
            <Link to="/Home" className="active">
              الرئيسية
            </Link>
            <Link to={'/About'}>عن الجمعية</Link>
            <Link to={'/NewsContainer'}>الاخبار</Link>
            <Link to={'/Teams'}>الفرق التطوعية</Link>
            <Link to={'/Polices'}>السياسات والحوكمة</Link>
            <div className="dropdown">
              <button className="dropbtn">
                تسجيل الدخول
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>
          <a className="icon" onClick={() => this.togglehandler()}>
            &#9776;
          </a>
        </div>
  <Switch>
          <Route path="/" component={Home}/>
          <Route path='/About' component={About} />
          <Route path='/NewsContainer' component={NewsContainer} />
          <Route path='/Teams' component={Teams} />
          <Route path='/Polices' component={Polices} />
       </Switch>
      </HashRouter>
    );
  }
}
