import Link from 'next/link'
import React from 'react'
import SideBar from './SideBar'

const NavHome = ({setShowSidebar,showSidebar}) => {

  return (
        
 <>
    <div className="flex justify-between items-center">
    
    <Link href="/">
    <img src="/images/logo.png" />
  </Link>


  <svg
  width="32"
  height="24"
  viewBox="0 0 32 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  onClick={() => setShowSidebar(!showSidebar)}
  className="cursor-pointer z-10"
>
  <path
    d="M1.33331 1H30.6666M1.33331 12H30.6666M1.33331 23H14.1666"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

  </div>


{showSidebar && (
  <SideBar setShowSidebar={setShowSidebar}/>
  )}

  
 </>

  )
}

export default NavHome