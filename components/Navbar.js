import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";
import NavbarPages from "./NavbarPages";
import NavHome from "./NavHome";
import SideBar from "./SideBar";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [shadow, setShadow] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      if (window.scrollY > 50) {
        setBgColor("bg-white");
        setShadow("shadow-md");
      } else {
        setBgColor("bg-transparent");
        setShadow("");
      }
      if (delta < 0) {
        if (router.pathname === "/") return router.push("/about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [router.pathname]);

  return (
    <>
      <nav
        className={
          router.pathname === "/"
            ? "z-30  w-full  fixed "
            : `z-30  w-full  fixed  ${bgColor} ${shadow}`
        }
      >
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
          {router.pathname === "/" ? (
            <NavHome
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          ) : isMobile ? (
            <NavMobile
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          ) : (
            <NavbarPages setShowSidebar={setShowSidebar} />
          )}
        </Wrapper>
      </nav>
    </>
  );
};

export default Navbar;
