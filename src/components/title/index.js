import React from 'react'

const Title = new Proxy({}, {
  get: (_, type) =>
    (props) => React.createElement(
      type.toLowerCase(),
      { ...props, className: `title ${props?.className ? props.className : ''}` },
      props.children
    )
})

export default Title