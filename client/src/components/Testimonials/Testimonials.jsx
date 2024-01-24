import { useContext } from 'react'

import { UseContext } from '../../App'

import './Testimonials.css'

function Testimonials() {
  const { testimonials } = useContext(UseContext)
  return (
    <div className='testimonials'>
      <span className='h3Span'>
        <h3>Testimonials</h3>
      </span>
      <h1>What People Say about us</h1>
      <div className="testimonialsContainer">
        {
          testimonials.map(e => (
            <div key={e.id} className="testimonialsData">
              <div className="imgFrame">
                <img src={e.img} alt="" />
              </div>
              <h3>{e.name}</h3>
              <p>{e.profession}</p>
              <img src={e.commaImg} alt="" />
              <p className='text'>{e.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials