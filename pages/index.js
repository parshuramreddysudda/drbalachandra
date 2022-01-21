import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingPage from '../components/LandingPage'
import Social from '../components/Social'
import Slider from '../components/Slider'
export default function Home() {
  return (
    <div className="">
      <Navigation />
      <LandingPage/>
      <Social/>
      <Slider/>
    </div>
  )
}