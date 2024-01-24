import contactImg from '../../images/contactImg.png'
import Questions2 from '../Questions2/Questions2'

import aboutImg from '../../images/aboutImg.png'
import './Contact.css'
import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='contact'>
      <span className='h3Span'>
        <h3>Get in Touch!</h3>
      </span>
      <h1>Let&apos;s Start WorkingTogether</h1>
      <div className="contactContainer1">
        <div className="contactContainer11">
          <h2>Contact information</h2>
          <div className="contactData">
            <i className="fa-solid fa-location-dot"></i>
            <h4>20, Backway Road, New York, US AB42</h4>
          </div>
          <div className="contactData">
            <i className="fa-solid fa-phone"></i>
            <h4>+000-000-000-000</h4>
          </div>
          <div className="contactData">
            <i className="fa-solid fa-envelope"></i>
            <h4>support@gmail.com</h4>
          </div>
          <img src={contactImg} alt="" />
        </div>
        <form className="contactContainer12">
          <input placeholder='Your name' name='name' type="text" /> 
          <input placeholder='Your email' name='email' type="text" />
          <input placeholder='Your phone' name='phone' inputMode="numeric" onInput={e => {
          e.target.value = e.target.value.replace(/[^0-9+]/g, '')}} type="tel" />
          <input placeholder='Subject' name='subject' type="text" />
          <textarea placeholder='Message' name='message' type="text" />
          <span className='btnFrame'>
            <button className='navbarBtn'>Send Now</button>
          </span>
        </form>
      </div>
      <div className="contactContainer2">
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Seattle%20Hoa%20K%E1%BB%B3+(University)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className="contactContainer3">
        <span className='h3Span'>
          <h3>FAQs</h3>
        </span>
        <h1>Frequently Aksed Questions</h1>
        <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
        <Questions2/>
        <img src={aboutImg} alt="" />
      </div>
    </div>
  )
}

export default Contact