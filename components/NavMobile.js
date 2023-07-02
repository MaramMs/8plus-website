import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SideBar from "./SideBar";

const NavMobile = ({setShowSidebar,showSidebar}) => {
  const router = useRouter();
  return (

    <>
     <div className="flex justify-between items-center">
      <Link href="/">
        <img src="/images/about-logo.png" width={91} />
      </Link>
      {router.pathname === "/" ? (
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <path
            d="M1 1H25M1 10H25M1 19H11.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowSidebar(!showSidebar)}

        >
          <path
            d="M1 1H25M1 10H25M1 19H11.5"
            stroke="#1768AC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>

{showSidebar && (
  <SideBar setShowSidebar={setShowSidebar}/>
  )}
    </>
   
  );
};

export default NavMobile;
