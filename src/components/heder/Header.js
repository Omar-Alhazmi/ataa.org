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
} from "react-router-dom";
import Home from "../home/Home";
import About from "../abuot/About";
import News from "../news/News";
import Polices from "../polices/Polices";
import Teams from "../teams/Teams";
import Login from "../login_reg/LoginContainer";
import Register from "../login_reg/Register";
import PrivateRoute from './PrivateRoute';
import TeamLeader from '../teams/teamLeader/TeamLeader';
import { getInfo, checkStorage ,getId} from '../helperMethods';

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
  const [title, setTitle] = useState("");

  useEffect(() => {
    {!getId() ? setTitle("انشاء فريق") :  setTitle(" اعدادات الفريق")}
  }, []);
  return (
    <>
      <Router>
        <IconContext.Provider value={{ color: '#fff' }}>
          <MainHeader.NavLogReg>
            <MainHeader.NavLogRegLink
              duration={500}
              spy={true.toString()}
              exact={true.toString()}
              to={'/Login'}>تسجيل الدخول</MainHeader.NavLogRegLink>|
            <MainHeader.NavLogRegLink to="/Register">تسجيل جديد</MainHeader.NavLogRegLink>
          </MainHeader.NavLogReg>
          <MainHeader.Nav scrollNav={scrollNav}>
            <MainHeader.NavContainer >
              <MainHeader.NavLogo to='/' onClick={toggleHandler}><MainHeader.Image scrollNav={scrollNav} duration={500} src={logo} alt="" /> </MainHeader.NavLogo>
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
                    smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact={true.toString()}
                    offset={13}
                  >الاخبار</MainHeader.NavLinks>
                </MainHeader.NavItem>|
                <MainHeader.NavItem>
                  <MainHeader.NavLinks
                    to="/Teams"
                    smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact={true.toString()}
                    offset={13}
                  >الفرق التطوعية</MainHeader.NavLinks>
                </MainHeader.NavItem>|
                {checkStorage() !== null && getInfo().data.Role === 'TeamLeader'?
                  <MainHeader.NavItem>
                    <MainHeader.NavLinks
                      to="/TeamLeader"
                      smooth={true.toString()}
                      duration={500}
                      spy={true.toString()}
                      exact={true.toString()}
                      offset={13}
                    > {title} | 
                    </MainHeader.NavLinks>
                  </MainHeader.NavItem>
                  :""}
                <MainHeader.NavItem>
                  <MainHeader.NavLinks to="/PrivacyPolicy" smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact={true.toString()}
                    offset={13}
                  >السياسات والحوكمة</MainHeader.NavLinks>
                </MainHeader.NavItem>|
              </MainHeader.NavMenu>
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
          {/* <Route exact path='/Polices'>
            <Polices />
          </Route> */}
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route exact path='/Register'>
            <Register />
          </Route>
          <PrivateRoute>
            <Route path={'/TeamLeader'} component={TeamLeader} />
            <Route path={'/Polices'} component={Polices} />

          </PrivateRoute>
        </Switch>
      </Router>
    </>
  )
}
export default Navbar