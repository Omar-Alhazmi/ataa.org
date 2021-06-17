import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import * as MainHeader from './MainHeaderStyle'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../image/logo.ico'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "../home/Home";
import About from "../abuot/About";
import News from "../news/NewsContainer";
import Polices from "../polices/Polices";
import Teams from "../teams/TeamsContainer";
import Login from "../login_reg/LoginContainer";
const Navbar = ({ toggle }) => {
    const [scrollNav, setScroll] = useState(false);
    const navOnChange = () => {
        if (window.scrollY >= 30) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', navOnChange);
    }, []);

    const toggleHandler = () => {
        scroll.scrollToTop();
    };
    return (
        <>
          <Router>
            <IconContext.Provider value={{ color: '#fff' }}>
              <MainHeader.NavLogReg> <MainHeader.NavLogRegLink to="/signin">تسجيل الدخول</MainHeader.NavLogRegLink>|
              <MainHeader.NavLogRegLink to="/signin">تسجيل جديد</MainHeader.NavLogRegLink>
              </MainHeader.NavLogReg>  
     
                <MainHeader.Nav scrollNav={scrollNav}>
                   
                    <MainHeader.NavContainer >
                        <MainHeader.NavLogo  to='/' onClick={toggleHandler}><MainHeader.Image scrollNav={scrollNav}  duration={500} src={logo} alt="" /> </MainHeader.NavLogo>
                        <MainHeader.ResponsiveIcon onClick={toggle}>
                            <FaBars />
                        </MainHeader.ResponsiveIcon>
                        <MainHeader.NavMenu>
                            <MainHeader.NavItem>
                                <MainHeader.NavLinks
                                   to={'/About'}
                                    duration={500}
                                    offset={13}
                                >عن الجمعية</MainHeader.NavLinks>
                            </MainHeader.NavItem>|
                            <MainHeader.NavItem>
                                <MainHeader.NavLinks
                                    to={'/News'}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true.toString()}
                                    offset={13}
                                >الاخبار</MainHeader.NavLinks>
                            </MainHeader.NavItem>|
                            <MainHeader.NavItem>
                                <MainHeader.NavLinks
                                    to="/Teams"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true.toString()}
                                    offset={13}
                                >الفرق التطوعية</MainHeader.NavLinks>
                            </MainHeader.NavItem>|
                            <MainHeader.NavItem>
                                <MainHeader.NavLinks to="PrivacyPolicy" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true.toString()}
                                    offset={13}
                                >السياسات والحوكمة</MainHeader.NavLinks>
                            </MainHeader.NavItem>|
                        </MainHeader.NavMenu>
                        {/* <MainHeader.NavButton>
                            <MainHeader.NavButtonLink to="/signin">تسجيل الدخول</MainHeader.NavButtonLink>
                        </MainHeader.NavButton> */}
                    </MainHeader.NavContainer>
                </MainHeader.Nav>
            </IconContext.Provider>
            <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/About' >
            <About />
          </Route>
          <Route exact path='/News'>
            <News />
          </ Route>
          <Route exact path='/Teams'>
            <Teams />
          </Route>
          <Route exact path='/Polices'>
            <Polices />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
        </Switch>
        </Router>
        </>
    )
}
export default Navbar



