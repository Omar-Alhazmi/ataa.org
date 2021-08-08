import React, { Component } from 'react'
import Footer from '../footer/Footer'
import { getAllNews } from '../api_config/api'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/footer.css';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      News: [],
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



  render() {
    const settings = {
      className: "sliderContainer",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 3000,
    };

    const news = this.state.News
    let allNews = (
      <div className="sliderMainContainer">
        <hr />
        <Slider {...settings}>
          <div>
            <h3>1test test
            </h3>
            <Link to="/News" className="P-display"><p>إقراالمزيد</p> </Link>
          </div>
          <div>
            <h3>2</h3>
            <Link to="/News" className="P-display" ><p >إقراالمزيد</p> </Link>
          </div>
        </Slider>
      </div>

    )
    if (news.length > 0) {
      allNews = (
        <div className="sliderMainContainer">
          <h3> اخر الاخبار </h3>
          <hr />
          <Slider {...settings}>
            {news.map((item, index) => (
              <div key={index}>
                <h3 className="NewsHomeDisplay">{item.Title}</h3>
                <Link to="/News" className="P-display" ><p  >إقراالمزيد</p> </Link>
              </div>

            ))}
          </Slider>
        </div>
      )
    }


    return (
      <div className="lol">
        {allNews}
        <Footer />
      </div>
    )
  }
}
