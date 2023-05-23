import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router);
  const [meun, setMenu] = useState(false);
  return (
    <>
      <nav className="inset-0 bg-gradient-to-r from-[#2563eba3] to-[#1e3a8ae6] w-full md:py-[20px] ">
        <div className="container flex justify-between items-center">
          <FaBars onClick={() => setMenu(!meun)} className="cursor-pointer" />

          <div>
            <img src="/images/logo.png" />
          </div>
        </div>
      </nav>

      {meun && (
        <div className="bg-white md:w-[507px]  left-0 top-0 h-full flex justify-end px-[100px] z-10 items-center fixed">
          <AiOutlineClose
            className="top-[64px] left-[128px] absolute cursor-pointer text-[27px] text-[#03256c]"
            onClick={() => setMenu(false)}
          />
          <ul>
            <li
              className={`${
                router.pathname === "/" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
