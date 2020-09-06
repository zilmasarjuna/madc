import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

const RenderAnimation = ({ children }) => {
  const [ animation, changeAnimation ] = useState(false)

  useEffect(() => {
    changeAnimation(true)
  }, [])

  return (
    <CSSTransition in={animation} timeout={200} classNames="page" unmountOnExit>
      {children}
    </CSSTransition>
  )
}

export default RenderAnimation