import HeroSection from '@/components/HeroSection'
import OurProducts from '@/components/OurProducts'
import Testimonials from '@/components/TestimonialsCards'
import React from 'react'
import Category from '@/components/Category'
import ThisMonth from '@/components/ThisMonth'
import ClickMe from '@/components/ClickMe'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Testimonials/>
      
      <Category/>
      <ThisMonth/>
      <ClickMe/>
      <OurProducts/>
      <OurServices/>
      <Footer/>
    </div>
  )
}

export default page
