import React from 'react'
import Skill from './Skill'

const SkillList = ({skills}) => {
  return (
    <div className='skill-list'>
        {skills.map((skill) => (<Skill skillName={skill.name} emoji={skill.emoji} color={skill.color} />))}
    </div>
  )
}

export default SkillList