import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import '../styles/slide_animation.css';
import '../styles/home.css'
import '../styles/footer.css'
import 'react-animated-slider/build/horizontal.css';
import Footer from '../hed_foot/Footer'
import { getAllNews } from '../api_config/api'
import apiURL from '../api_config/ApiConfig';

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
        const news = this.state.News
        const content =
        {
            title: 'Vulputate Mollis Ultricies Fermentum Parturient',
            description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
            button: 'Read More',
            image: 'https://i.imgur.com/ZXBtVw7.jpg',
            user: 'Luan Gjokaj',
            userProfile: 'https://i.imgur.com/JSW6mEk.png'
        }

        let allNews = (
            <Slider className="slider-wrapper">
                <div
                    className="slider-content"
                    style={{ background: `url('${content.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>{content.Title}</h1>
                        <p>{content.Content}</p>
                        <button className="readMore">إقرأ المزيد</button>
                    </div>
                    <section>
                        <img src={content.userProfile} alt={content.user} />
                        <span>
                            Posted by <strong>{content.user}</strong>
                        </span>
                    </section>
                </div>
            </Slider>
        )
        if (news.length > 0) {
            allNews = (
                <Slider className="slider-wrapper">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${apiURL}${item.Banner}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.Title}</h1>
                            <p>{item.Content}</p>
                            <button className="readMore">إقرأ المزيد</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
            )
        }


        return (
       <>
    {allNews}
         <Footer />
         </>    
        )
    }
}
