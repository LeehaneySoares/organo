import './style.css'
import React from 'react'

const Text = new Proxy({}, {
  get: (_, type) =>
    (props) => React.createElement(
      type.toLowerCase(),
      { ...props, className: `organo__text ${props?.className ? props.className : ''}` },
      props.children
    )
})

export default Text