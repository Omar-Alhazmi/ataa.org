import React, { Component } from 'react'
import Footer from '../hed_foot/Footer'
import News from './News';
export default class NewsContainer extends Component {
    render() {
        return (
            <div>
                <News />
                <Footer />
            </div>
        )
    }
}
