import React from 'react'
import Header from '../Header/header'
import Routers from '../../Routes'
import ShowResults from '../Calculs/showResults'
import Navigation from '../navigation/navigation'
import Footer from '../Footer/Footer'
import './layout.css'
export default function Layout({handlelogout}) {
  return (
    <div>
        <Header handleLogout={handlelogout}/>
        <hr/>
        <ShowResults/>
        <Navigation/>
        <Routers/>
        <Footer/>
    </div>
  )
}
