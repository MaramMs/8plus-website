import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const paths = ["/", "/about", "/ourworks", "/services", "/contact", "/blog"];

  // const handleWheel = (event) => {
  //   console.log(event , 'event');
  //   const delta = Math.sign(event.deltaY);
  //   console.log(delta , 'delta');
  //  if (delta > 0) {

  //     const currentIndex = paths.indexOf(router.pathname);
  //    console.log(currentIndex, "+ index");
  //   if (currentIndex != -1) {
  //   const nextPage = paths[currentIndex + 1];
  //   if (nextPage) {
  //  router.push(nextPage);
  //    }
  //    }
  //   } else if (delta === 0) {
  //   const currentIndex = paths.indexOf(router.pathname);
  // console.log(currentIndex, "- index");
  //   const prevPage = paths[currentIndex - 1];
  //   if (prevPage) {
  //    router.push(prevPage);
  //    }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("wheel", handleWheel);
  //   return () => {
  //     document.removeEventListener("wheel", handleWheel);
  //   };
  // }, [router.pathname]);

  return (
    <>
      <nav className={router.pathname ==='/' ? "z-30  w-full  fixed " : "z-30  w-full  fixed  bg-[#fff]"}>
        {router.pathname === "/ourworks" ? (
          <img
            src="/images/plus.png"
            className=" absolute left-[3%]  top-[1%] hidden md:block"
          />
        ) : (
          <img
            src="/images/plus.png"
            className=" absolute left-[36%]  top-[1%] hidden md:block"
          />
        )}
        <Wrapper>
          <div className="flex justify-between items-center">
            <div>
              {router.pathname === "/" ? (
                <Link href="/">
                  <img src="/images/logo.png" />
                </Link>
              ) : (
                <Link href="/">
                  <img src="/images/about-logo.png" />
                </Link>
              )}
            </div>

            {router.pathname === "/" ? (
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
            ) : (
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowSidebar(true)}
                className="cursor-pointer z-10"
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

      {showSidebar && (
        <div className="bg-white w-[242px] md:w-[507px]  left-0 top-0 h-full flex px-[74px] md:px-[100px] fixed z-[100] items-center  text-right	">
          <AiOutlineClose
            className="top-[64px] left-[128px] absolute cursor-pointer text-[27px] text-[#03256c]"
            onClick={() => setShowSidebar(false)}
          />
          <ul>
            <li
              className={`${
                router.pathname === "/" ? "active" : ""
              } mb-[23px] text-[20px] md:text-[32px]  text-[#000] font-semibold`}
            >
              <Link
                href="/"
                data-path="/"
                onClick={() => setShowSidebar(false)}
              >
                {t("home")}
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[20px] md:text-[32px]  text-[#000] font-semibold`}
            >
              <Link
                href="/about"
                data-path="/about"
                onClick={() => setShowSidebar(false)}
              >
                {t("about")}
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/ourworks" ? "active" : ""
              } mb-[23px] text-[20px] md:text-[32px]  text-[#000] font-semibold`}
            >
              <Link
                href="/ourworks"
                data-path="/ourworks"
                onClick={() => setShowSidebar(false)}
              >
                {t("ourwork")}
              </Link>
            </li>

            <li
              className={`${
                router.pathname === "/services" ? "active" : ""
              } mb-[23px]  text-[20px] md:text-[32px] text-[#000] font-semibold`}
            >
              <Link
                href="/services"
                data-path="/services"
                onClick={() => setShowSidebar(false)}
              >
                {t("services")}
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/contact" ? "active" : ""
              } mb-[23px]text-[20px] md:text-[32px]  text-[#000] font-semibold`}
            >
              <Link
                href="/contact"
                data-path="/contact"
                onClick={() => setShowSidebar(false)}
              >
                {t("contact")}
              </Link>
            </li>

            <li
              className={`${
                router.pathname === "/blog" ? "active" : ""
              } mb-[23px]  text-[20px] md:text-[32px] text-[#000] font-semibold`}
            >
              <Link
                href="/blog"
                data-path="/blog"
                onClick={() => setShowSidebar(false)}
              >
                {t("blog")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
