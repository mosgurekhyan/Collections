import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import ROUTES from '../../routes/routes'
import { UseContext } from '../../App'

import './AdminEdit.css'

function AdminEdit() {
  const navigate = useNavigate()
  const { heroes } = useContext(UseContext)
  const { id } = useParams()
  const [ currentHero, setCurrentHero ] = useState({
    name: '', 
    avatar: '',
    nikname: '',
    rating: '',
    author: '',
    img: ''
  })

  const inputRefs = {
    author: useRef(null),
    name: useRef(null),
    nikname: useRef(null),
    avatar: useRef(null),
    img: useRef(null),
    rating: useRef(null)
  }

  useEffect(() => {
    if(heroes.some(e => e._id === id)) {
      setCurrentHero({ ...heroes.find(e => e._id === id)})
    } else {
      axios
      .get(`http://localhost:3000/heroes/${id}`)
      .then(res => {
        if (res.data) {
          setCurrentHero(res.data.hero)
        }
      })
      .catch(err => console.error(err))
    }
  }, [id, heroes])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {}
    
    for (const key in inputRefs) {
      newData[key] = inputRefs[key].current.value
    }

    axios
      .put(`http://localhost:3000/heroes/${id}`, newData)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    for (const key in inputRefs) {
      inputRefs[key].current.value = ''
    }

    navigate(`${ROUTES.ADMIN}`)
  }

  return (
    <div className="adminEdit">
      <form onSubmit={handleSubmit} className="editHero">
        <h3>Edit hero here</h3>
        <div>
          <label className='adminLabel' htmlFor="author">author:</label>
          <input ref={inputRefs.author} defaultValue={currentHero?.author} className='adminInput' type="text" name='author'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="name">name:</label>
          <input ref={inputRefs.name} defaultValue={currentHero?.name} className='adminInput' type="text" name='name'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="nikname">nikname:</label>
          <input ref={inputRefs.nikname} defaultValue={currentHero?.nikname} className='adminInput' type="text" name='nikname'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="avatar">avatar:</label>
          <input ref={inputRefs.avatar} defaultValue={currentHero?.avatar} className='adminInput' type="text" name='avatar'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="img">img:</label>
          <input ref={inputRefs.img} defaultValue={currentHero?.img} className='adminInput' type="text" name='img'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="rating">rating:</label>
          <input ref={inputRefs.rating} defaultValue={currentHero?.rating} className='adminInput' type="text" name='rating'/>
        </div>
        <button>Edit</button>
      </form>
    </div>
  )
}

export default AdminEdit