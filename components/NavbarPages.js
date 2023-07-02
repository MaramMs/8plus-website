import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const NavbarPages = ({setShowSidebar}) => {
    const { t } = useTranslation();

    const router = useRouter()
  return (
    <div className='flex justify-between items-center'>
        <Link href="/" >
                  <img src="/images/about-logo.png" />
                </Link>
                <ul className='flex-1 flex-row flex justify-center gap-[90px] bg-transparent items-center'>
            <li
              className={`${
                router.pathname === "/" ? "active" : ""
              } text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              }  text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              }  text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              }   text-[15px] md:text-[20px] text-[#000] font-semibold`}
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
              }  text-[18px] md:text-[20px]  text-[#000] font-semibold`}
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
              }   text-[18px] md:text-[20px] text-[#000] font-semibold`}
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

export default NavbarPages