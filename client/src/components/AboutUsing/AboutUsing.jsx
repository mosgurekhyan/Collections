import { useContext } from 'react'
import './AboutUsing.css'
import { UseContext } from '../../App'

function AboutUsing() {
  const { aboutUsingData } = useContext(UseContext)
  return (
    <div className='aboutUsing'>
      <div className="aboutUsingData">
        {
          aboutUsingData.map(e => (
            <div className='details' key={e.id}>
              <i className={e.img} />
              <p>{e.quantity}</p>
              <p>{e.about}</p>
              <div className="line"></div>
            </div>
          ))
        }
        <img src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/couter.7e8e8190921744886487.png" alt="" />
      </div>
    </div>
  )
}

export default AboutUsing