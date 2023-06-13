import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={`p-[19px]  md:px-[128px] md:py-[17px] ${className || '' }`}>
      {children}
    </div>
  )
}

export default Wrapper