import React, { Component } from 'react'
import '../styles/footer.css'
import logo from '../../image/logo.ico';

export default class Footer extends Component {
    render() {
        return (
            <div>
               
                <footer className="footer-distributed">

                    <div className="footer-left">

                        <h3>    <img src={logo} /> </h3>

                        <p className="footer-links">
                            {/* <a href="#">Home</a>
                            ·
                            <a href="#">Blog</a>
                            ·
                            <a href="#">Pricing</a>
                            ·
                            <a href="#">About</a>
                            ·
                            <a href="#">Faq</a>
                            ·
                            <a href="#">Contact</a> */}
                        </p>
                    
                        <p className="footer-company-name"> &copy; 2019</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>21 Revolution Street</span> الطائف, المملكة العربية السعودية</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+966 555 000000</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:ataatiforg@gmail.com">ataatiforg@ataatiforg.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                        </p>

                        <div className="footer-icons">

                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>

                        </div>

                    </div>

                </footer>

            </div>
        )
    }
}
