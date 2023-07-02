import React from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SideBar = ({setShowSidebar}) => {
    const {t} = useTranslation();
    const router = useRouter()
  return (
    <div className="bg-white w-[242px] md:w-[300px]  left-0 top-0 h-[100vh] flex px-[74px] md:px-[90px] fixed z-[100] items-center  text-right	">
          <AiOutlineClose
            className="top-[64px] left-[128px] absolute cursor-pointer text-[27px] text-[#03256c]"
            onClick={() => setShowSidebar(false)}
          />
          <ul>
            <li
              className={`${
                router.pathname === "/" ? "active" : ""
              } mb-[23px] text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              } mb-[23px] text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              } mb-[23px] text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              } mb-[23px]  text-[15px] md:text-[20px] text-[#000] font-semibold`}
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
              } mb-[23px] text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              } mb-[23px]  text-[18px] md:text-[20px] text-[#000] font-semibold`}
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
  )
}

export default SideBar

