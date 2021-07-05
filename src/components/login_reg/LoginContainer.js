import React, { Component } from 'react'
import '../styles/footer.css';
import Footer from '../footer/Footer';
import '../styles/login.css';
export default class LoginContainer extends Component {
  render() {
    return (
      <>
        <div className="LoginContainer">
          <form class='login-form'>
            <div class="flex-row">
              <label class="lf--label" for="username">
                <svg x="0px" y="0px" width="12px" height="13px">
                </svg>
              </label>
              <input id="username" className='lf--input' placeholder='البريد الالكتروني' type='text' />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="password">
                <svg x="0px" y="0px" width="15px" height="5px">
                </svg>
              </label>
              <input id="password" className='lf--input' placeholder='كلمة المرور' type='password' />
            </div>
            <input className='lf--submit' type='submit' value='تسجيل الدخول' />
            <input className='lf--submit' type='submit' value='تسجيل جديد ' />
          </form>
        </div>
        <Footer />
      </>
    )
  }
}
