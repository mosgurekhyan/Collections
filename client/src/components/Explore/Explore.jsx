import Participants from '../Participants/Participants'
import assets from '../../images/assets.png'

import './Explore.css'
import { useEffect } from 'react'

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='explore'>
      <div className="exploreContainer1">
        <div className="overlay7"></div>
        <div className="exploreContainer11">
          <span className='h3Span'>
            <h3>Visions & Mission</h3>
          </span>
          <h1>Our Vision</h1>
          <p>Cyfonii aims to build a virtual reality environment, a real metaverse for business activities, where all users can easily bring their business activities to the network environment, conduct the comprehensive digital transformation of business operations, increase outstanding efficiency with the maximum support of technologies.</p>
          <span className='h3Span'>
            <h3>Visions & Mission</h3>
          </span>
          <h1>Our Mission</h1>
          <p>Cyfonii is conceptualized almost like the development of the digital society and digital economy of the world according to the comprehensive digital transformation model (Digital Transformation) in the period of Industry 4.0 taking place very strongly all over the world starting from the digitization period (Digitization) to the goal of building a virtual super universe (Metaverse) is being shaped.</p>
        </div>
        <div className="exploreContainer12">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
          <div className="img5"></div>
        </div>
      </div>
      <Participants/>
      <div className="exploreContainer2">
        <h1>Assets</h1>
        <p>In the world of BIZVERSE, users are allowed to be creative, the system will allow users to participate in creating their own digital assets in the form of non-fungible tokens NFT. These NFTs will then be exchanged, transferred at Marketplace or at their own showroom in shopping centers. At that time, even players can easily make profits from the NFT they have created.</p>
        <h3>Assets (NFTs) tree</h3>
        <img src={assets} alt="" />
      </div>
    </div>
  )
}

export default Explore