import { useContext } from 'react'

import { UseContext } from '../../App'

import './RoadMap.css'

function RoadMap() {
  const { roadMap } = useContext(UseContext)
  return (
    <div className='roadmap'>
      <span className='h3Span'>
        <h3>Road Map</h3>
      </span>
      <h1>The Journey of NFT Portfolio</h1>
      <div className="line2"></div>
      <div className="roadmapData">
        {
          roadMap.map(e => (
            <div className='roadmapDetail' key={e.id}>
              <div className="circleFrame">
                <div className="circle"></div>
              </div>
              <span>{e.date}</span>
              <h4>{e.title}</h4>  
              <div className="line3"></div>
              <p>{e.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RoadMap