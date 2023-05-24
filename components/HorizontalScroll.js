import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HorizontalScroll = () => {
  const KEY_RIGHT_ARROW = 39;
  const router = useRouter();
const paths = ['/','/services','/about','contact']
const handleKeydown = (event) => {
    if (event.keyCode === KEY_RIGHT_ARROW) {
      for(let i=0; i<paths.length ; i++){
        console.log('maranfvkdf');
        console.log(router.pathname ,'path');
        console.log(paths[i] , 'i');
        if(router.pathname === paths[i]){
            console.log('maramkf');
            // console.log(router.pathname , 'name');
            console.log(paths[i+1], 'router');
            router.push(paths[i+1]);
        }
      }
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [router.pathname]);
  return (
    <div>
      {/* <h1>Horizontal Scroll</h1>
      <div>Current Page: {router.pathname}</div>
      <div>
        <Link href="/about" >
          About
        </Link>
        <Link href="/contact" >
        Contact
        </Link>
        <Link href="/services">
        Services
        </Link>
        {/* Add more Link components for other pages 
      </div> */}
    </div>
  );
};

export default HorizontalScroll;
