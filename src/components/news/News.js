import React, { Component } from 'react'
import   '../styles/news.css';
export default class News extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="thumbnail"><img className="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" /></div>
                    <div className="right">
                        <h1 className="card_title">Why you Need More Magnesium in Your Daily Diet</h1>
                        <div className="separator"></div>
                        <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
                    </div>
                    <h5>12</h5>
                    <h6>JANUARY</h6>
                </div>
            </div>
        )
    }
}
