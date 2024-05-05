import React from 'react'
import schema from './schema.json'
import Select from '../Select'

const Form = (form) => (
  <form className='formulario' onSubmit={(e) => form.submit(e)}>
    <h2 className='formulario__title'>{schema.title}</h2>
    {form.inputs}
    <Select onChange={(value) => form.changeOption(value)} />
    <button className='formulario__action' type='submit'>
      {schema.action}
    </button>
  </form>
)

export default Form