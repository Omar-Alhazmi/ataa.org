import React, { Component } from 'react'
import { getAllPolices, NewPolice } from '../api_config/api'
import apiURL from '../api_config/ApiConfig';
import Footer from '../footer/Footer';
import PolicesForm from './PolicesForm';
import { authToPost, getId, validFileTypePDF } from '../helperMethods';
import Swal from "sweetalert2";
export default class Polices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Polices: [],
            file: "",
            toggle: false,
                Title: "",
        };
    }

    componentDidMount() {
        // Mack API call 
        getAllPolices(this.props.Polices)
            .then((response) => {
                const Polices = response.data.filter((Polices) => {
                    return Polices.InHomePage === true
                })
                this.setState({ Polices });
            })
            .catch((error) => {
            })
    }
    addNewPolice = (Police) => {
        console.log(Police);
        const { file } = this.state
        if (file) {
            if (!validFileTypePDF(file)) {
                throw Swal.fire({
                    title: ` الرجاء التأكد من امتداد  الملف  ان يكون تابع لملفات الصور`,
                    icon: 'error',
                    showCancelButton: false,
                })
            }
            if (file.size > 5242880) {
                throw Swal.fire({
                    title: ` "5MB" :حجم الملف اكبر من `,
                    icon: 'error',
                    showCancelButton: false,
                })
            }
        }
        NewPolice(Police, getId(), file)
            .then(response => {
                console.log(response);
                if (response === "Error") {
                    Swal.fire({
                        title: ` ${response.data.message}`,
                        icon: 'error',
                        showCancelButton: false,
                    })
                }
                try {
                    Swal.fire({
                        title: `  تم إضافة   ${this.state.Title}   بنجاح`,
                        icon: 'success',
                        confirmButtonText: 'موافق',
                        showCancelButton: false,
                    })
                    this.toggleHandler()
                }
                catch (error) {
                    Swal.fire({
                        title: ` ${response.data.message}`,
                        icon: 'error',
                        showCancelButton: false,
                    })
                }
            })
    }
    toggleHandler = () => {
        this.setState({ toggle: !this.state.toggle })
      }
      handleChange(e) {
        this.setState(() => ({ [e.target.name]: e.target.value }))
      }
      handleFileChange(e) {
        const file = e.target.files[0];
        this.setState({ file: file })
      }
      handelSubmit = e => {
        e.preventDefault();
        const { Title } = this.state
        if (authToPost() === true) {
          this.addNewPolice(Title);
        }
      };
    render() {
        const { file, toggle ,Title,Polices} = this.state
        let allPolices = <div class="spinner">Loading...</div>
        if (Polices.length > 0) {
             allPolices = (
                <ol className="PolicesList">
                  {Polices.map((item, index) => (
                     <a href={`${apiURL}${item.File}`}  target="_blank" rel="noreferrer" >  
                     <li key={index}>
                      {item.Title}--{item.PostAt.slice(0, 10)}
                         </li>
                         </a>
                  ))}
                  </ol>
            )}
        return (
            <div>
                {authToPost() === true ?
                    <button className="button" onClick={e => this.toggleHandler(e)}> إضافة ملف</button>
                    : ""}
                {toggle === true ?
                    <PolicesForm file={file} Title={Title} hide={e => this.toggleHandler(e)} onFileChange={e => this.handleFileChange(e)} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} />
                    : ""}
                {allPolices}
                <Footer />
            </div>
        )
    }
}

