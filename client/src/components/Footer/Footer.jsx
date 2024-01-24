import { useNavigate } from 'react-router-dom'
import './Footer.css'
import logo from '../../images/logo.png'

function Footer() {
  const navigate = useNavigate()
  return (
    <footer>
      <h1 className='footerTitle'>Get Newsletter</h1>
      <p className='footerP'>Get udpated with news, tips & tricks</p>
      <input className='footerInput' type="email" name='email' placeholder='Your email' />
      <span onClick={() => navigate('/about')} className='btnFrame'>
        <button className='navbarBtn'>Subscribe</button>
      </span>
      <div className="footer">
        <img className='logo' src={logo} alt="" />
        <ul className='footerUl'>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/explore')}>Explore</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/collections')}>Collections</li>
          <li onClick={() => navigate('/team')}>Team</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
        <div className="footerIcons">
          <a className='footerA' href="https://www.facebook.com/"><i className="footerIcon fa-brands fa-facebook"></i></a>
          <a className='footerA' href="https://www.twitter.com/"><i className="footerIcon fa-brands fa-square-twitter"></i></a>
          <a className='footerA' href="https://www.linkedin.com/"><i className="footerIcon fa-brands fa-linkedin"></i></a>
          <a className='footerA' href="https://www.youtube.com/"><i className="footerIcon fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer