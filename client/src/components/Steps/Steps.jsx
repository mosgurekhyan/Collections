import { useContext } from 'react'

import { UseContext } from '../../App'

import './Steps.css'

function Steps() {
  const { steps } = useContext(UseContext)
  return (
    <div className='steps'>
      {
        steps.map(e => (
          <div className='step' key={e.id}>
            <span>
              <h5>Step {e.id}</h5>
            </span>
            <div className="stepContainer1">
              <img src={e.img} alt="" />
            </div>
            <div className="line8"></div>
            <div className="stepContainer2">
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Steps