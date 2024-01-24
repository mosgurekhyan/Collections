import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UseContext } from '../../App'
import ROUTES from '../../routes/routes'

import './Participants.css'

function Participants() {
  const navigate = useNavigate()
  const { participants } = useContext(UseContext)
  return (
    <div className='participants'>
      <h1>Participants</h1>
      <div className="participantsData">
        {
          participants.map(e => (
            <div className='imageFrame' key={e.id}>
              <img src={e.img} alt="" />
            </div>
          ))
        }
      </div>
      <p>In BIZVERSE, there are users with equal roles in a common community, depending on the token ownership process and user&apos;s investment decision, it will determine the activities and rights that the user is allowed.</p>
      <p>All members in system can choose for themselves a 3D Avatar with many styles, skin colors, shapes, hair, clothes, shoes, glasses, hats... according to their preferences as soon as they join Bizverse and it is also a vrNFT asset class.</p>
      <span onClick={() => navigate(`${ROUTES.CONTACT}`)} className='btnFrame'>
        <button className='navbarBtn'>Join Us</button>
      </span>
    </div>
  )
}

export default Participants