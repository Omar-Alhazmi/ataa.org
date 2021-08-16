import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#c6e4d1' : 'transparent')};
height: 80px;
/* margin-top: -80px; */
display: flex;
-webkit-flex-direction: column; 
  flex-direction: column; 
  padding: 0;
  margin: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
justify-content: right;
align-items: right;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width:960px){
     transition: 0.8s all ease;
}`;
export const NavContainer = styled.div`
display: flex;
/* justify-content: space-between; */
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px; `;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-end;
cursor: pointer;
font-size:1.5rem;
display: flex;
align-items: center;
margin-right: 24px;
font-weight: bold;
text-decoration: none;
`;
export const Image = styled.img`

    width: ${({scrollNav}) => (scrollNav ? `100px` : `227px`)};

    @media screen and (max-width:960px){
        width: 130px;
        }
    `

export const ResponsiveIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
  background-color: #c99f34;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%); 
    font-size: 1.8rem;
    cursor: pointer;
    color:#B38533;
}`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
color: #B38533;

@media screen and (max-width:760px){
    display:none;
}`;

export const NavItem = styled.li`
height:80px;`;

export const NavLinks = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: #2b0061;
&:hover{
  color: #B38533;
}
&.active{
    border-bottom: 3px solid #01bf71;
}`;


export const NavLogReg = styled.nav`
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 768px) {
    display: none;
}`
export const NavLogRegLink = styled(Link)`
border-radius: 50px;
white-space: nowrap;
padding: 10px 22px;
text-align:left;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
/* transition: all 0.2s ease-in-out; */
text-decoration: none;
color: #3EC1B9;
&:hover{
  color: #B38533;
}
`
export const Logout = styled.button`
border-radius: 50px;
white-space: nowrap;
padding: 10px 22px;
text-align:left;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
/* transition: all 0.2s ease-in-out; */
text-decoration: none;
color: #3EC1B9;
&:hover{
  color: #B38533;
}
`