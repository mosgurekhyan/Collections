import { useContext } from 'react'

import { UseContext } from '../../App'

import './Brands.css'

function Brands() {
  const { brands } = useContext(UseContext)
  
  return (
    <div className='brands'>
      <span className='h3Span'>
        <h3>We Are Partnered with Top Brands</h3>
      </span>
      <div className="brandsFrame">
        {
          brands.map(e => <img className='brandImg' key={e.id} src={e.img} alt='' />)
        }
      </div>
    </div>
  )
}

export default Brands