import { useContext, useEffect, useState } from 'react'
import './Heroes.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseContext } from '../../App'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

function Heroes() {
  const [ data, setData ] = useState([])
  const { setHeroes} = useContext(UseContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    axios
    .get('http://localhost:3000/heroes')
    .then(res => {
      if (res.data) {
        setData(res.data.heroes)
        setHeroes(res.data.heroes)
      }
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, [ setHeroes ])

  const handleDelete = (id) => {
    axios
    .delete(`http://localhost:3000/heroes/${id}`)
    .then(() => setData(prevData => prevData.filter(hero => hero._id !== id)))
    .catch(err => console.error(err))
  }

  return (
    <div className='heroes'>
      {
        loading ? <LoadingSpinner/> :
        data?.map(e => (
          <div className='heroFrame' key={e._id}>
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
            <div className="heroBtns">
              <button className='heroBtn' onClick={() => handleDelete(e._id)}>Delete</button>
              <button className='heroBtn' onClick={() => navigate(`/admin/${e._id}`)}>Go to edit</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Heroes