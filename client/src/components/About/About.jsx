import Steps from '../Steps/Steps'

import aboutImg2 from '../../images/aboutImg2.png'
import './About.css'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about'>
      <span className='h3Span'>
        <h3>Join NFT Portfolio</h3>
      </span>
      <h1>Become a Cyfonii Player Now</h1>
      <div className="aboutContainer">
        <Steps/>
        <img className='aboutImg2' src={aboutImg2} alt="" />
      </div>
    </div>
  )
}

export default About