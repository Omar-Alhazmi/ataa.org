import React, { Component } from 'react'
import '../styles/login.css';
import Footer from '../footer/Footer';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          Email:"",
          password:""
        }
        // this.change = this.handelChange.bind(this);
        // this.submit = this.handelSubmit.bind(this);
      }
    render() {
        return (
            <>
            <div className="LoginContainer">
              <form className='login-form' onSubmit={e => this.submit(e)}>
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
                  onChange={e => this.change(e)}
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
                   onChange={e => this.change(e)}
                   value={this.state.password} />
                </div>
                <input className='lf--submit' type='submit' value='تسجيل الدخول' onClick={e => this.submit(e)}/>
                <input className='lf--submit' type='submit' value='تسجيل جديد ' onClick={() => this.props.history.push("/Register")}/>
              </form>
            </div>
            <Footer />
          </>
        )
    }
}
