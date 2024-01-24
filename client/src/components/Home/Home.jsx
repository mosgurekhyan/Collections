import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Slider from '../Slider/Slider'

import './Home.css'
import ROUTES from '../../routes/routes'
import Brands from '../Brands/Brands'
import AboutUsing from '../AboutUsing/AboutUsing'
import OurCollection from '../OurCollection/OurCollection'
import RoadMap from '../RoadMap/RoadMap'
import TeamMembers from '../TeamMembers/TeamMembers'
import Testimonials from '../Testimonials/Testimonials'
import Questions from '../Questions/Questions'
import Blog from '../Blog/Blog'

function Home() {
  const navigate = useNavigate()
  const [ img, setImg ] = useState(false)
  const [ brandsImgs, setBrandsImgs ] = useState(false)
  const [ questions, setQuestions ] = useState(false)
  const [ forSlider, setForSlider ] = useState(false)
  
  useEffect(() => {
    setForSlider(true)
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    console.log('HOME update!')
  })
  
  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 850){
      setImg(true)
    }else {
      setImg(false)
    }
    if (e.target.documentElement.scrollTop > 1750){
      setBrandsImgs(true)
    }else {
      setBrandsImgs(false)
    }
    if (e.target.documentElement.scrollTop > 6000){
      setQuestions(true)
    }else {
      setQuestions(false)
    }
  }

  return (
    <div className='home'>
      <div className="header">
        <div className="overlay1"></div>
        <span className='h3Span'>
          <h3>We are Monteno NFT</h3>
        </span>
        <h1>Most Popular Collections</h1>
        <p>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        <span onClick={() => navigate('/contact')} className='btnFrame'>
          <button className='navbarBtn'>Get Connected</button>
        </span>
      </div>
      <Slider {...{forSlider}}/>
      <div className="homeContainer1">
        <span className='h3Span'>
          <h3>About us</h3>
        </span>
        <h1>Hight Quality NFT Collections</h1>
        <div className="overlay2"></div>
        <img style={{marginTop: img ? '' : '320px', opacity: img ? '1' : '0'}} src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/about-06.c67cc69a5afe47ddd7ad.png" alt="" />
        <p>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
        <span onClick={() => navigate(`${ROUTES.ABOUT}`)} className='btnFrame'>
          <button className='navbarBtn'>More About Us</button>
        </span>
      </div>
      <div className="homeContainer2">
        <div className='brandsWrapper' style={{marginTop: brandsImgs ? '' : '100px', opacity: brandsImgs ? '1' : '0'}}>
          <Brands/>
        </div>
      </div>
      <AboutUsing/>
      <OurCollection/>
      <RoadMap/>
      <TeamMembers/>
      <Testimonials/>
      <div className="homeContainer3">
        <div style={{marginTop: questions ? '' : '-100px', opacity: questions ? '1' : '0'}}>
          <span className='h3Span'>
            <h3>FAQs</h3>
          </span>
          <h1>Frequently Aksed Questions</h1>
          <p>Below is a list of frequently asked questions and answers from partners and 3D artist</p>
          <p>Please check this FAQ first before contacting us.</p>
        </div>
      </div>
      <Questions/>
      <Blog/>
    </div>
  )
}

export default Home