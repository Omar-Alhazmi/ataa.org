import './App.css';
import {useState} from 'react'

import NavBar from './components/heder/Header';
import Sidebar from './components/Sidebar';
import { Route, HashRouter,Switch } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
       <HashRouter>
       {/* <Switch> */}
       <Sidebar isOpen={isOpen} toggle={toggle}/>
       <NavBar toggle={toggle}/>
      {/* </Switch> */}
    </HashRouter>
    </>

  );
}

export default App;
