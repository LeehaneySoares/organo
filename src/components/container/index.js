import './style.css'
import React from 'react'

export default new Proxy({}, {
  get: (_, type) =>
    (props) =>
    React.createElement(type.toLocaleLowerCase(), {
      ...props,
      className: `container ${'className' in props ? props.className : ''}`
    }, props.children)
})