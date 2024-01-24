import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../../images/logo.png'
import ROUTES from '../../routes/routes'


import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  return (
    <header>
      <nav>
        <img className='logo' src={logo} alt="" />
        <ul className='navbarMenu'>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={ROUTES.EXPLORE}>Explore</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={ROUTES.CONTACT}>Contact</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-nav' : null} to={ROUTES.ADMIN}>Admin</NavLink>
          </li>
        </ul>
        <span onClick={() => navigate(`${ROUTES.CONTACT}`)} className='btnFrame'>
          <button className='navbarBtn'>Join Now</button>
        </span>
      </nav>
    </header>
  )
}

export default Navbar