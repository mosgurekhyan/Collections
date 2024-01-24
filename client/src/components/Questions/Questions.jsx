import { useContext, useState } from 'react'

import { UseContext } from '../../App'

import './Questions.css'

function Questions() {
  const { questions } = useContext(UseContext)
  const [ activeId, setActiveId ] = useState(null)

  const handleQuestionClick = (id) => {
    setActiveId(id === activeId ? null : id)
  }

  return (
    <div className='questions'>
      <div className="line5"></div>
      <div className="questionsMainContainer">
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
        <div className="questionsContainer">
          {
            questions.map(e => e.id > 4 && (
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
      </div>
    </div>
  )
}

export default Questions