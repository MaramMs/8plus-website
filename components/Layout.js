import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({children}) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }
  return (
    <div className='flex justify-between flex-col min-h-screen'>
     <Navbar />
    
      {children}
   
     <Footer />
    </div>
  )
}

export default Layout