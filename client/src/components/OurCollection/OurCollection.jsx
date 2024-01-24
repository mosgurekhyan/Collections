import { useContext } from 'react'

import { UseContext } from '../../App'

import './OurCollection.css'

function OurCollection() {
  const { ourCollection } = useContext(UseContext)

  return (
    <div className='ourCollection'>
      <span className='h3Span'>
        <h3>About us</h3>
      </span>
      <h1>OUR COLLECTION</h1>
      <div className="collection">
        {
          ourCollection.map(e => (
            <div key={e.id} className="collectionData">
              <div className="imgWrapper2">
                <img src={e.img} alt="" />
              </div>
              <span>{e.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurCollection