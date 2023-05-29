import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const router = useRouter();
  const [meun, setMenu] = useState(false);
  const { t } = useTranslation();
  const KEY_RIGHT_ARROW = 39;
  const KEY_LEFT_ARROW = 37;

  const paths = ["/", "/services", "/about", "/contact"];
  const handleKeydown = (event) => {
    if (event.keyCode === KEY_RIGHT_ARROW) {
      const currentIndex = paths.indexOf(router.pathname);
      if (currentIndex != -1) {
        const nextPage = paths[currentIndex + 1];
        if (nextPage) {
          router.push(nextPage);
        }
      }
    } else if (event.keyCode === KEY_LEFT_ARROW) {
      const currentIndex = paths.indexOf(router.pathname);
      const prevPage = paths[currentIndex - 1];
      if (prevPage) {
        router.push(prevPage);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [router.pathname]);

  //   const paths = ['/', '/services', '/about', '/contact'];

  // const handleMouseClick = (event) => {
  //   console.log(event.target, 'event');
  //   const currentIndex = paths.indexOf(router.pathname);
  //   console.log(currentIndex , 'index');
  //   const targetPath = event.target.getAttribute('data-path');
  //   console.log(targetPath , 'target');

  //   if (targetPath && targetPath !== router.pathname) {
  //     const targetIndex = paths.indexOf(targetPath);

  //     if (targetIndex > currentIndex) {
  //       const nextPage = paths[targetIndex];
  //       router.push(nextPage);
  //     } else if (targetIndex < currentIndex) {
  //       const prevPage = paths[targetIndex];
  //       router.push(prevPage);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleMouseClick);
  //   return () => {
  //     document.removeEventListener('click', handleMouseClick);
  //   };
  // }, [router.pathname]);

  return (
    <>
      <nav className="z-10 absolute w-full ">
        <img
          src="/images/plus.png"
          className=" absolute left-[36%]  top-[1%]"
        />
        <Wrapper>
          <div className="flex justify-between items-center">
            <div>
              {router.pathname === "/" ? (
                <img src="/images/logo.png" />
              ) : (
                <img src="/images/about-logo.png" />
              )}
            </div>

            {router.pathname === "/" ? (
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMenu(!meun)}
                className="cursor-pointer"
              >
                <path
                  d="M1.33331 1H30.6666M1.33331 12H30.6666M1.33331 23H14.1666"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMenu(!meun)}
                className="cursor-pointer"
              >
                <path
                  d="M1 1H30.3333M1 12H30.3333M1 23H13.8333"
                  stroke="#1768AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </Wrapper>
      </nav>

      {meun && (
        <div className="bg-white md:w-[507px]  left-0 top-0 h-full flex  px-[100px] z-10 items-center fixed text-right	">
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
              <Link href="/" data-path="/">
                {t("home")}
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/services" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/services" data-path="/services">
                {t("services")}
              </Link>
            </li>

            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/about" data-path="/about">
                {t("about")}
              </Link>
            </li>

            <li
              className={`${
                router.pathname === "/contact" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/contact" data-path="/contact">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
