import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={` md:px-[128px] md:py-[53px] ${className || '' }`}>
      {children}
    </div>
  )
}

export default Wrapper