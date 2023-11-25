import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import BackToTop from '../components/BackToTop/BackToTop'
import MainSec from '../components/MainSec/MainSec'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'

export default function Index() {
  return (
    <div>
      <Header/>
      <Banner/>
      <BackToTop/>
    <MainSec/>
    <Blog/>
    <Footer/>
    </div>
  )
}
