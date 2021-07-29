import React, { Component } from 'react'
import '../styles/login.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom'
import { UserRegistration } from '../api_config/api';
import { AiOutlineMail, AiFillIdcard, AiOutlineMobile } from 'react-icons/ai';
import { CgLastpass, CgUserList, CgRename, CgWorkAlt, CgGenderFemale, CgGenderMale } from 'react-icons/cg';
import Swal from "sweetalert2";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: "",
      FullName: "",
      Role: "",
      Job: "",
      Phone: "",
      NationalId: "",
      Education: "",
      Gender: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // Function to set data in ServiceDescription state
  addUser = User => {
    // Make an api call request to add a new user 
    let checkValidation = true
    // let isGUser = false
    const stateWithoutEducation = (({Education, ...o }) => o)(User)
    Object.entries(stateWithoutEducation).forEach(([key, value]) => {
      if(value === ""){
        return checkValidation = false;
      }
    })
if(checkValidation === false){
      Swal.fire({ icon: 'error', title: " الرجاء التأكد من ادخال  جميع البيانات" });
    }
     else{
      UserRegistration(User)
        .then(response => {
          console.log(response);

          if (response.data.success === false && response.data.message === "dataFill" ) {
            Swal.fire({ icon: 'error', title: "تأكد من ملء جميع البيانات" });
          }
          if (response.data.success === false && response.data.message === "Email already exists." ) {
            Swal.fire({ icon: 'error', title: "البريد الالكتروني مسجل من قبل " });
          }
          if (response.data.success === true) {
            Swal.fire({ icon: 'success', title: "تم إرسال رسالة التأكيد الى  البريد الالكتروني " });
          }
        })
        .catch(error => {
          Swal.fire({ icon: 'error', title: `حدث خطا`});
        });
    };
  }

  handelSubmit = e => {
    // set the object of new user data 
    const newUser = this.state;
    e.preventDefault();
    this.addUser(newUser);
  };

  render() {
    const { FullName, Job, NationalId, Email, Phone, password, Role, Gender, Education } = this.state;

    return (
      <>
        <div className="LoginContainer">
          <form className='login-form' onSubmit={e => this.handelSubmit(e)}>
            <div className="flex-row">
              <label className="lf--label" for="Email">
                <AiOutlineMail />
              </label>
              <input id="Email"
                required
                className='lf--input'
                placeholder='البريد الالكتروني'
                name="Email"
                type="text"
                onChange={e => this.handleChange(e)}
                value={Email} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="password">
                <CgLastpass />
              </label>
              <input
                required
                id="password"
                className='lf--input'
                placeholder='كلمة المرور'
                name="password"
                type='password'
                onChange={e => this.handleChange(e)}
                value={password} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="Role">
                <CgUserList />
              </label>
              <select id="Role"
                className='lf--input'
                name="Role"
                required
                onChange={e => this.handleChange(e)}
                value={Role} >
                <option value="" disabled>اختر نوع  التسجيل</option>
                <option value="TeamLeader">رئيس فريق</option>
                <option value="TeamMember">عضو فريق</option>
                <option value="GeneralMember">عضو في الجمعية العمومية</option>
              </select>
            </div>
            <div className="flex-row">
              <label className="lf--label" for="NationalId">

                <CgRename />
              </label>
              <input
                required
                id="FullName"
                className='lf--input'
                placeholder='الإسم رباعي'
                name="FullName"
                type="text"
                onChange={e => this.handleChange(e)}
                value={FullName} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="NationalId">
                <AiFillIdcard />
              </label>
              <input
                required
                id="NationalId"
                className='lf--input'
                placeholder='الهوية الوطنية'
                name="NationalId"
                type="number"
                onChange={e => this.handleChange(e)}
                value={NationalId} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="Phone">
                <AiOutlineMobile />
              </label>
              <input
                required
                id="Phone"
                className='lf--input'
                placeholder='رقم الجوال '
                name="Phone"
                type="number"
                onChange={e => this.handleChange(e)}
                value={Phone} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="Job">
                <CgWorkAlt />
              </label>
              <input
                required
                id="Job"
                className='lf--input'
                placeholder='العمل الحالي '
                name="Job"
                type="text"
                onChange={e => this.handleChange(e)}
                value={Job} />
            </div>
            <div className="flex-row">
              <label className="lf--label" for="Gender">
                <CgGenderMale />
                <CgGenderFemale />
              </label>
              <select id="Gender"
                className='lf--input'
                name="Gender"
                onChange={e => this.handleChange(e)}
                value={Gender} >
                <option value="" disabled>الجنس</option>
                <option value="M">ذكر</option>
                <option value="F">انثى</option>
              </select>
            </div>
            {Role === "GeneralMember" ?
              <div className="flex-row">
                <label className="lf--label" for="Education">
                  <svg x="0px" y="0px" width="12px" height="13px">
                  </svg>
                </label>
                <select id="Education"
                  required
                  className='lf--input'
                  name="Education"
                  onChange={e => this.handleChange(e)}
                  value={Education} >
                  <option value="" disabled>المؤهل</option>
                  <option value="phd">دكتوراه</option>
                  <option value="Master">ماجستير</option>
                  <option value="bachelorDegree">بكالوريوس</option>
                  <option value="highSchool">ثانوي</option>
                  <option value="MedSchool">متوسط</option>
                  <option value="primarySchool">ابتدائي</option>
                </select>
              </div>
              : ""}
            <input className='lf--submit' type='submit' value='تسجيل' onClick={e => this.handelSubmit(e)} />
            <Link to={'Login'} className='lf--submit'>
              العودة الى تسجيل الدخول
            </Link>
          </form>
        </div>
        <Footer />
      </>
    )
  }
}
