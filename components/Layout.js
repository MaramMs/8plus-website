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
    //1920
    <div>
     <Navbar />
     <main>
      {children}
     </main>
     <Footer />
    </div>
  )
}

export default Layout