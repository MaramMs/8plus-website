import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

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
      <nav className="z-10 absolute w-full md:py-[20px] ">
        <div className="container flex justify-between items-center">
          <div>
            <img src="/images/logo.png" />
          </div>
          <FaBars onClick={() => setMenu(!meun)} className="cursor-pointer" />
        </div>
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
              <Link href="/" data-path="/">{t("home")}</Link>
            </li>
            <li
              className={`${
                router.pathname === "/services" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/services" data-path="/services">{t("services")}</Link>
            </li>

            <li
              className={`${
                router.pathname === "/about" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/about" data-path="/about">{t("about")}</Link>
            </li>

            <li
              className={`${
                router.pathname === "/contact" ? "active" : ""
              } mb-[23px] text-[32px] text-[#000] font-semibold`}
            >
              <Link href="/contact" data-path="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;



// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import { useRouter } from "next/router";
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { t } = useTranslation();

//   const paths = ['/', '/services', '/about', '/contact'];

//   const handleMouseClick = (path) => {
//     console.log(path);
//     console.log('path');
//     if (path !== router.pathname) {
//       router.push(path);
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleTouchStart = () => {
//       setMenuOpen(false);
//     };

//     document.addEventListener("touchstart", handleTouchStart);
//     return () => {
//       document.removeEventListener("touchstart", handleTouchStart);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="z-10 absolute w-full md:py-[20px] ">
//         <div className="container flex justify-between items-center">
//           <div>
//             <img src="/images/logo.png" />
//           </div>
//           <FaBars
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="cursor-pointer"
//           />
//         </div>
//       </nav>

//       {menuOpen && (
//         <div className="bg-white md:w-[507px]  left-0 top-0 h-full flex  px-[100px] z-10 items-center fixed text-right	">
//           <AiOutlineClose
//             className="top-[64px] left-[128px] absolute cursor-pointer text-[27px] text-[#03256c]"
//             onClick={() => setMenuOpen(false)}
//           />
//           <ul>
//             {paths.map((path, index) => (
            
//             <>
//             console.log('matbdcnsc');
//               console.log(path);
//               <li
//               key={index}
//               className={`${
//                 router.pathname === path ? "active" : ""
//               } mb-[23px] text-[32px] text-[#000] font-semibold`}
//             >
//               <div
//                 onClick={() => handleMouseClick(path)}
//                 onTouchStart={() => handleMouseClick(path)}
//                 data-path={path}
//               >
//                 {t(path.slice(1))}
//               </div>
//             </li>
//             </>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
