import { Component } from 'react'
import Option from './Option'
import schema from './schema.json'

class Select extends Component {
  render () {
    return (
      <div className='organo__select'>
        <label htmlFor='organo' className='organo__selectLabel'>{schema.label}</label>
        <select
          className='organo__list'
          id='organo'
          defaultValue={schema.optionDefault}
          onChange={(e) => this.props.onChange(e.target.value)}
          required
        >
          <option disabled value={schema.optionDefault}>{schema.optionDefault}</option>
          {schema.options.map(item => Option(item))}
        </select>
      </div>
    )
  }

  static create () {
    return new Select()
  }
}

export default Select