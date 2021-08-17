import React, { Component } from 'react'
import Footer from '../footer/Footer';
import '../styles/spinner.css'
export default class About extends Component {
    render() {
        return (
            <div>
                <div class="spinner">Loading...</div>
              <Footer />  
            </div>
        )
    }
}