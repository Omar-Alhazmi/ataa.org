import React,{useState} from 'react'
import Navbar from '../heder/Header'
import Sidebar from '../Sidebar'
import '../styles/heder.css';
import Teams from '../teams/TeamsContainer'
import HomeObjOne from '../home/Home'

import News from '../news/NewsContainer'
import Footer from '../footer/Footer'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
        <div   className="space">
      <br />
        </div>
          <Footer />
        </>
    )
}
export default Home
