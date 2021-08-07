import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './NewsStyled'
import { getAllNews, NewPost } from '../api_config/api'
import apiURL from '../api_config/ApiConfig';
import Footer from '../footer/Footer';
import { authToPost, getId ,validFileType} from '../helperMethods';
import NewsForm from './NewsForm';
import Swal from "sweetalert2";

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      News: [],
      image: "",
      toggle: false,
      FormData: {
        Title: "",
        Content: "",
      }
    };
  }

  componentDidMount() {
    // Mack API call 
    getAllNews(this.props.News)
      .then((response) => {
        const News = response.data.filter((News) => {
          return News.InHomePage === true
        })
        this.setState({ News });
      })
      .catch((error) => {
      })
  }
  addNewPost = (Post) => {
    const { image } = this.state
    if (image) {
      if (!validFileType(image)) {
        throw Swal.fire({
          title: ` الرجاء التأكد من امتداد  الملف  ان يكون تابع لملفات الصور`,
          icon: 'error',
          showCancelButton: false,
        })
      }
      if (image.size > 5242880) {
        throw Swal.fire({
          title: ` "5MB" :حجم الملف اكبر من `,
          icon: 'error',
          showCancelButton: false,
        })
      }
    }
    NewPost(Post, getId(), image)
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
            title: `  تم إضافة   ${this.state.FormData.Title}   بنجاح`,
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
    const FormData = { ...this.state.FormData, [e.target.name]: e.target.value }
    this.setState(() => ({ FormData }))
  }
  handleFileChange(e) {
    const file = e.target.files[0];
    this.setState({ image: file })
  }
  handelSubmit = e => {
    e.preventDefault();
    const { FormData } = this.state
    if (authToPost() === true) {
      this.addNewPost(FormData);
    }
  };
  render() {
    const StyledRoot = styled.div`
  padding: 50px 12px;
`

    const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
 
`
    const date = new Date().toLocaleDateString()
    const news = this.state.News
    let allNews = (
      <StyledRoot>
        <StyledContainer>

          <Card
            title={"...."}
            date={date}
            description={"...."}
          />
        </StyledContainer>
      </StyledRoot>
    )
    if (news.length > 0) {
      allNews = (
        <StyledRoot>
          <StyledContainer >
            {news.map((item, index) => (
              <Card
                key={index}
                styledPhoto={`${apiURL}${item.img[0]}`}
                title={item.Title}
                date={item.PostAt}
                description={item.Content}
              />

            ))}
          </StyledContainer>
        </StyledRoot>
      )
    }
    const { image, toggle ,FormData} = this.state
    return (
      <div>
        {authToPost() === true ?
          <button className="button" onClick={e => this.toggleHandler(e)}> انشاء منشور جديد</button>
          : ""}
        {toggle === true ?
          <NewsForm image={image} data={FormData} hide={e=>this.toggleHandler(e)} onFileChange={e => this.handleFileChange(e)} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} />
          : ""}     
        {allNews}
        <Footer />
      </div>
    )
  }
}