import React, { Component } from 'react'
import   '../styles/news.css';
import {getAllNews} from '../api_config/api';
import apiURL from '../api_config/ApiConfig';
export default class News extends Component {
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
                this.setState({ News: response.data });
                })
            .catch((error) => {
            })
    }
    render() {
        const dateFormat = require('dateformat');

        let allNews = <h3> قريبا... </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.News.length > 0) {
            allNews = this.state.News.map((item, index) => {
                return (
                    <div>
                    <div className="card"  key={index}>
                        <div className="thumbnail"><img className="left" src={`${apiURL}${item.img}`} /></div>
                        <div className="right">
                            <h1 className="card_title">{item.Title}</h1>
                            <div className="separator"></div>
                            <p>{item.Content}</p>
                        </div>
                        
                        <h5>  {dateFormat(item.PostAt, "m")}</h5>
                        <h6>{dateFormat(item.PostAt, "yy")}</h6>
                    </div>
                </div>
                );
            })
        }
        return (
<>
{allNews}
</>
        )
    }
}
