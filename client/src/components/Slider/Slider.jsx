import { useEffect, useState } from 'react'
import axios from 'axios'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import './Slider.css'

function Slider(forSlider) {
  const [ index, setIndex ] = useState(0)
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  console.log(forSlider)
  useEffect(() => {
    axios
    .get('http://localhost:3000/heroes')
    .then(res => {
      if (res.data) {
        setData(res.data.heroes)
        setLoading(false)
      }
    })
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % data.length)
    }, 3000)
    return () => clearInterval(slider)
  }, [index, data.length])
  
  return (
    <section className="section">
      <div className="overlay1"></div>
      {loading ? <LoadingSpinner/> : data.map((e, i) => {
        const position = i === index
        ? 'activeSlide'
        : i === (index - 1 + data.length) % data.length
        ? 'lastSlide'
        : i === (index + 1) % data.length
        ? 'nextSlide'
        : 'pendingSlide'
        return (
        <article className={position} key={e._id}>
          <div className="heroData1">
            <div className='heroData1Before'></div>
            <span className='heroSpan'>
              <h4 className='heroName'>{e.name}</h4>
              <h4 className='heroRating'>{e.rating}</h4>
            </span>
          </div>
          <div className="heroImgFrame">
            <img className='heroImg' src={e.img} alt="" />
          </div>
          <div className="heroData2">
            <img className='heroAvatarImg' src={e.avatar} alt="" />
            <span className='heroSpan2'>
              <h4 className='heroAuthor'>{e.author}</h4>
              <h4 className='heroNikname'>{e.nikname}</h4>
            </span>
          </div>
        </article>
        )
      })}
    </section>
  )
}

export default Slider