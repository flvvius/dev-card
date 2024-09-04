import React from 'react'

const Skill = ({skillName, emoji, color}) => {
  return (
    <div className='skill' style={{backgroundColor: color}}>
        <p>{skillName} {emoji}</p>
    </div>
  )
}

export default Skill