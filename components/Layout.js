import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }
  return (
    <>
     <Navbar />
     <main>
      {children}
     </main>
    </>
  )
}

export default Layout