import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Heroes from '../Heroes/Heroes'

import './Admin.css'
import ROUTES from '../../routes/routes'

function Admin() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='admin'>
      <h1>Admin page</h1>
      <span onClick={() => navigate(`${ROUTES.ADMINADD}`)} className='btnFrame'>
        <button className='navbarBtn'>Go to add hero</button>
      </span>
      <h2>Heroes</h2>
      <div className="adminContainer">
        <Heroes/>
      </div>
    </div>
  )
}

export default Admin