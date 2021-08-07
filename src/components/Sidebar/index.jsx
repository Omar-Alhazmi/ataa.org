import React, { useState, useEffect } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { leadTeam,newTeam } from '../helperMethods';

const Sidebar = ({ isOpen, toggle }) => {
   const [handleDisplay, setTitle] = useState("");
   useEffect(() => {
      if (!leadTeam() && !newTeam()) {
         setTitle("انشاء فريق")
      } else { setTitle(" اعدادات الفريق") }
   }, []);
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
               <SidebarLink to="TeamLeader" onClick={toggle}>{handleDisplay}</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute to="/signin">تسجيل الدخول</SidebarRoute>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}
export default Sidebar

