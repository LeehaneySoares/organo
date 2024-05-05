import React from 'react'
import component from './component'
import converter from './converter'
import Input from '../Input'
import schema from './schema.json'

class Form extends React.Component {
  #data
  #inputs
  #selectedTime

  get data () {
    return (this.#data ??= {})
  }

  get inputs () {
    return (this.#inputs ??= schema.inputs.map(Input))
  }

  get selectedTime () {
    return (this.#selectedTime ??= '')
  }

  changeOption (selectedTime) {
    this.#selectedTime = selectedTime
    return this
  }

  render () {
    return component(this)
  }

  rewind (form) {
    form.reset()
    return this
  }

  submit (event) {
    event?.preventDefault()

    this.#data = converter(event.target, this)
    this.props.onInsertTeam(this.data)
    this.rewind(event.target)
    return this
  }
}

export default Form