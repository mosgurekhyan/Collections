import { useContext } from 'react'

import { UseContext } from '../../App'

import './TeamMembers.css'

function TeamMembers() {
  const { teamMembers } = useContext(UseContext)
  return (
    <div className='teamMembers'>
      <div className="overlay3"></div>
      <span className='h3Span'>
        <h3>Team Members</h3>
      </span>
      <h1>Our Amazing Team Members</h1>
      <div className="members">
        {
          teamMembers.map(e => (
            <div key={e.id} className="member">
              <div className="imageFrame">
                <img src={e.img} alt="" />
              </div>
              <h3>{e.name}</h3>
              <h4>{e.profession}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TeamMembers