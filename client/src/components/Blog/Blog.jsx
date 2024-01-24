import { useContext, useEffect } from 'react'

import { UseContext } from '../../App'

import './Blog.css'

function Blog() {
  const { blogElements } = useContext(UseContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blog'>
      <span className='h3Span'>
        <h3>From Our Blog</h3>
      </span>
      <h1>Read Our Recent News & Articles</h1>
      <div className="overlay6"></div>
      <div className="blogContainer">
        {
          blogElements.map(e => (
            <div key={e.id} className="blogElementData">
              <div className="imageFrame">
                <img src={e.img} alt="" />
              </div>
              <span>
                <i className="fa-regular fa-calendar"></i>
                <p>{e.date}</p>
              </span>
              <h3>{e.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Blog