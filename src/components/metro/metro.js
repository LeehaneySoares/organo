import { Component } from 'react'
import component from './component'

class Metro extends Component {
  #length
  #maxWidth
  #offSetPercentage
  #percentage

  get length () {
    return (this.#length ??= 0)
  }

  get maxWidth () {
    return (Metro.cardWidth * this.length)
  }

  get offSetPercentage () {
    return (this.#offSetPercentage ??= 0)
  }

  get percentage () {
    return (this.#percentage ??= 0)
  }

  static get cardWidth () {
    return 245
  }

  constructor (props) {
    super(props)
    this.state = { currentIndex: 0 }
  }

  moveLeft () {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    } else {
      return this
    }
  }

  moveRight () {
    if (this.state.currentIndex < (this.length - 1)) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      return this
    }
  }

  render () {
    this.#length = this.props.children.length
    this.#percentage = (100 / this.length)
    this.#offSetPercentage = this.state.currentIndex * this.percentage

    return component(this, this.state)
  }
}

export default Metro