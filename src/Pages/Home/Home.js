import React from 'react'
import Header from '../../Components/Header/Header';
// import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import HomeSection from '../../Components/HomeSection/HomeSection';
import Talkwithus from '../../Components/Talk-with-us/Talk-withus';
import Footer from '../../Components/Footer/Footer';
import ExtraMiniCard from '../../Components/ExtraMiniCard/ExtraMiniCard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import OurMisson from '../../OurMisson/OurMisson';

const Home = () => {
  return (
    <div>
      <Header/>
      {/* <Hero/> */}
      <HomeSection/>
      <ExtraMiniCard/>
      <About/>
      <Services/>
      <OurMisson/>
      <Testimonials/>
      <Talkwithus/>
      <Footer/>
    </div>
  )
}

export default Home;