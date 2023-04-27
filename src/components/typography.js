import React from 'react'
const Typography = ({ value, block, style, className, children }) => {
  const initialStyle = {
    color: 'white',
    fontFamily: 'Rajdhani',
  }
  return React.createElement(
    block ? 'div' : 'span',
    {
      style: style ? { ...initialStyle, ...style } : initialStyle,
      className: className ? className : '',
    },
    children || value
  )
}

export default Typography
