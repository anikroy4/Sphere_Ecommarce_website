import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../sections/header/Header'
import Footer from '../sections/footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default RootLayout