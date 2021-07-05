import React from 'react';
import { SidebarContainer,Icon,CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,SideBtnWrap, SidebarRoute  } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
     <Icon onClick={toggle}>
        <CloseIcon />
     </Icon>
     <SidebarWrapper>
        <SidebarMenu>
         <SidebarLink to="about" onClick={toggle} >عن الجمعية</SidebarLink>
         <SidebarLink to="News" onClick={toggle}>الاخبار</SidebarLink>
         <SidebarLink to="Teams" onClick={toggle}>الفرق التطوعية</SidebarLink>
         <SidebarLink to="PrivacyPolicy" onClick={toggle}>السياسات والحوكمة</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to="/signin">تسجيل الدخول</SidebarRoute>
        </SideBtnWrap>
     </SidebarWrapper>
    </SidebarContainer>
    )
}
export default Sidebar
