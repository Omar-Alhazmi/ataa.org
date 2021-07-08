import React, { Component } from 'react'
import '../styles/footer.css';
import Footer from '../footer/Footer';
import '../styles/login.css';
import Swal from "sweetalert2";
import { getInfo } from "../helperMethods";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import  apiURL  from '../api_config/ApiConfig';

const history = createBrowserHistory();
export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Email:"",
      password:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handelSubmit(e) {
        e.preventDefault();
        axios
      .post(`${apiURL}api/User/login`, {
        Email: this.state.Email,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("currentUser", res.data.token);
        let jwt = getInfo().data.Role;
        console.log(jwt);
        if (jwt === undefined) {
          history.push("/");
          Swal.fire(` ${jwt}`, "", 'error');
        }
        else if (jwt === "TeamLeader") {
          console.log(jwt);
          Swal.fire(` مرحبا  ${getInfo().data.FullName} `, 'success');
          history.push('/#/TeamLeader')
        } else if (jwt === "TeamCoLeader") {
          console.log(jwt);
          history.push("/");
          Swal.fire(` مرحبا  ${getInfo().data.FullName} `, 'success');
        } else if (jwt === "TeamMember") {
          history.push("/");
          Swal.fire(` مرحبا  ${getInfo().data.FullName} `, 'success');
        } else if (jwt === "GeneralMember") {
          history.push("/");
          Swal.fire(` مرحبا  ${getInfo().data.FullName} `, 'success');
        }else{
          Swal.fire(` اسم المستخدم او الرقم السري غير صحيح`, "", 'error');
        }
      window.location.reload(false);
        return res; 
  })
}


  render() {
    return (
      <>
        <div className="LoginContainer">
          <form className='login-form' onSubmit={e => this.handelSubmit(e)}>
            <div className="flex-row">
              <label className="lf--label" for="username">
                <svg x="0px" y="0px" width="12px" height="13px">
                </svg>
              </label>
              <input id="username" 
              className='lf--input' 
              placeholder='البريد الالكتروني' 
              name="Email"
              type="text"
              onChange={e => this.handleChange(e)}
              value={this.state.Email} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="password">
                <svg x="0px" y="0px" width="15px" height="5px">
                </svg>
              </label>
              <input id="password" 
              className='lf--input' 
              placeholder='كلمة المرور'
              name="password"
               type='password'
               onChange={e => this.handleChange(e)}
               value={this.state.password} />
            </div>
            <input className='lf--submit' type='submit' value='تسجيل الدخول' onClick={e => this.handelSubmit(e)}/>
            <Link to={'Register'} className='lf--submit' type='submit'>
            تسجيل جديد
            </Link>
          </form>
        </div>
        <Footer />
      </>
    )
  }
}
