import React from 'react'

function Input (props) {
  return (
    <div key={props.id} className='input'>
      <label className='input__label'>{props.label}</label>
      <input { ...props } className='input__element' />
    </div>
  )
}

export default Input