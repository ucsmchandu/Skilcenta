import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
      <>
      <Navbar/>
       <Outlet/>
     <Footer/>
      </>
  )
}

export default MainLayout