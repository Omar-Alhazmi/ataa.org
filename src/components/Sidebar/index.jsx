import React, { useState, useEffect } from 'react';
import * as SidebarElements from './SidebarElements';
import { leadTeam, newTeam } from '../helperMethods';

const Sidebar = ({ isOpen, toggle }) => {
   const [handleDisplay, setTitle] = useState("");
   useEffect(() => {
      if (!leadTeam() && !newTeam()) {
         setTitle("انشاء فريق")
      } else { setTitle(" اعدادات الفريق") }
   }, []);
   return (
      <SidebarElements.SidebarContainer isOpen={isOpen} onClick={toggle}>
         <SidebarElements.Icon onClick={toggle}>
            <SidebarElements.CloseIcon />
         </SidebarElements.Icon>
         <SidebarElements.SidebarWrapper>
            <SidebarElements.SidebarMenu>
               <SidebarElements.SidebarLink to="/About" onClick={toggle} >عن الجمعية</SidebarElements.SidebarLink>
               <SidebarElements.SidebarLink to="/News" onClick={toggle}>الاخبار</SidebarElements.SidebarLink>
               <SidebarElements.SidebarLink to="/Teams" onClick={toggle}>الفرق التطوعية</SidebarElements.SidebarLink>
               <SidebarElements.SidebarLink to="/Polices" onClick={toggle}>السياسات والحوكمة</SidebarElements.SidebarLink>
               <SidebarElements.SidebarLink to="/TeamLeader" onClick={toggle}>{handleDisplay}</SidebarElements.SidebarLink>
            </SidebarElements.SidebarMenu>
            <SidebarElements.SideBtnWrap>
               <SidebarElements.SidebarRoute to="/Login">تسجيل الدخول</SidebarElements.SidebarRoute>
            </SidebarElements.SideBtnWrap>
         </SidebarElements.SidebarWrapper>
      </SidebarElements.SidebarContainer>
   )
}
export default Sidebar

