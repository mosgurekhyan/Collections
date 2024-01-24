import axios from 'axios'
import { useEffect, useRef } from 'react'

import './AdminAdd.css'

function AdminAdd() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const inputRefs = {
    author: useRef(null),
    name: useRef(null),
    nikname: useRef(null),
    avatar: useRef(null),
    img: useRef(null),
    rating: useRef(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {}
    for (const key in inputRefs) {
      newData[key] = inputRefs[key].current.value
    }

    axios.post('http://localhost:3000/heroes/add', newData)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    for (const key in inputRefs) {
      inputRefs[key].current.value = ''
    }
  }

  return (
    <div className="adminAdd">
      <form onSubmit={handleSubmit} className="addHero">
        <h3>Add hero here</h3>
        <div>
          <label className='adminLabel' htmlFor="author">author:</label>
          <input ref={inputRefs.author} className='adminInput' type="text" name='author'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="name">name:</label>
          <input ref={inputRefs.name} className='adminInput' type="text" name='name'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="nikname">nikname:</label>
          <input ref={inputRefs.nikname} className='adminInput' type="text" name='nikname'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="avatar">avatar:</label>
          <input ref={inputRefs.avatar} className='adminInput' type="text" name='avatar'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="img">img:</label>
          <input ref={inputRefs.img} className='adminInput' type="text" name='img'/>
        </div>
        <div>
          <label className='adminLabel' htmlFor="rating">rating:</label>
          <input ref={inputRefs.rating} className='adminInput' type="text" name='rating'/>
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AdminAdd