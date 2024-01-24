import { useContext, useState } from 'react'

import { UseContext } from '../../App'

import './Questions2.css'

function Questions2() {
  const { questions } = useContext(UseContext)
  const [ activeId, setActiveId ] = useState(null)

  const handleQuestionClick = (id) => {
    setActiveId(id === activeId ? null : id)
  }
  return (
    <div className="questionsContainer">
      {
        questions.map(e => e.id < 5 && (
          <div key={e.id} style={{height: activeId === e.id ? '143px' : ''}} className="questionData">
            <div>
              <h3>{e.question}</h3>
              <i onClick={() => handleQuestionClick(e.id)} className={`fa-solid ${activeId === e.id ? 'fa-minus' : 'fa-plus'} `}></i>
            </div>
            <p>{e.answer}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Questions2