import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
 
  const { t } = useTranslation();

  const [dataHome , setDataHome] = useState({});
  const [loading ,setLoading] = useState(true)

  useEffect(() =>{
    const getHome = async() =>{
      const res = await fetch("https://new.8plusit.com/api/home");
    const resData = await res.json();
    setDataHome(resData.data.home_page);
    setLoading(false);
  }
  getHome();
  },[])
  return (
    <>
    {
      loading ? <p> Loading ....</p> : (
        <div className="relative h-screen w-full bg-[url('/images/bg-home.png')] bg-cover flex justify-center items-center flex-col">
      <div className="absolute z-20  home"></div>


<motion.div
  initial={{ opacity: 1, x: -6000}}
  animate={{ opacity: 1, x: "100vw" }}
  transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
  className="md:bottom-0 bottom-[10%] z-10 block absolute text-white left-0 w-[476px] md:w-full"
>
  <h1 className="md:text-[96px] text-[32px] font-semibold text-neutral-200">
    ثمانية بلس منظومة تكنولوجية متكاملة
  </h1>
</motion.div>


      <div className="container flex justify-center items-center flex-col z-20">
        <h1 className="text-[#fff] md:text-[30px] text-[20px] font-semibold text-center md:w-[782px] break-words md:mb-[15px] mb-[9px]">
          {dataHome.title}
        </h1>
        <p className="text-[14px] font-medium text-[#fff] text-center md:w-[580px] break-words md:mb-[64px] mb-[42px]">
          {dataHome.descreption}
        </p>
        <div className="flex justify-center items-center gap-[11px]">
       <Link href='/contact'>
       <Button className="rounded-[24px] bg-[#fff]  p-[16px] relative flex justify-center items-center hover:bg-transparent hover:border-[#fff] hover:border hover:text-[#fff] text-[#1768ac] text-[12px] font-semibold  transition-all    duration-[2s] ease ">
            {t("home-btn-start-project")}
          <Image  src='/images/arrow-gif.gif' width={125.5} height={125.5} alt=''  className="absolute top-[30px] right-[-50px] transform scale-x-[-1] rotate-[120deg]"/>
          </Button>
       </Link>
        <Link href='/about'>
        <Button className="rounded-[24px] border border-[#fff] bg-transparent hover:bg-white hover:text-[#1768ac] p-[16px] text-[12px] transition-all    duration-[2s] ease font-semibold flex justify-center items-center text-[#fff]">
            {t("home-btn-more")}
          </Button>
        </Link>
        </div>


          
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="absolute bottom-[0%] items-center  md:flex hidden "
>

  <div className="md:flex flex-col justify-center items-center">
  <svg
            width="14"
            height="36"
            viewBox="0 0 14 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00002 12.5451C5.92111 12.545 4.86642 12.8649 3.96931 13.4643C3.07221 14.0637 2.37299 14.9156 1.96008 15.9124C1.54717 16.9091 1.43912 18.006 1.64958 19.0642C1.86004 20.1223 2.37957 21.0943 3.14246 21.8573C3.90536 22.6202 4.87735 23.1397 5.93553 23.3502C6.99371 23.5607 8.09054 23.4527 9.08732 23.0398C10.0841 22.6269 10.9361 21.9277 11.5355 21.0307C12.1349 20.1336 12.4548 19.0789 12.4548 18C12.4529 16.5539 11.8776 15.1675 10.8551 14.1449C9.83252 13.1224 8.44621 12.547 7.0001 12.5451H7.00002ZM6.36283 29.564C6.56294 29.6532 6.77955 29.6992 6.99861 29.6992C7.21767 29.6992 7.43429 29.6532 7.63439 29.564L12.0117 27.6142C13.0803 27.0672 13.7404 28.1937 13.1791 28.9165C12.1624 30.2255 9.10291 33.5421 7.7069 35.0437C7.61638 35.1411 7.50677 35.2188 7.3849 35.2719C7.26303 35.325 7.13151 35.3524 6.99858 35.3524C6.86564 35.3524 6.73413 35.325 6.61225 35.2719C6.49038 35.2188 6.38077 35.1411 6.29025 35.0437C4.89416 33.5422 1.83479 30.2255 0.818145 28.9165C0.270332 28.2112 0.896504 27.0568 1.98533 27.6142L6.36283 29.564ZM6.36283 6.43591C6.56294 6.34677 6.77955 6.30071 6.99861 6.30071C7.21767 6.30071 7.43429 6.34677 7.63439 6.43591L12.0117 8.38575C13.0803 8.93279 13.7404 7.80622 13.1791 7.08341C12.1624 5.77443 9.10291 2.45786 7.7069 0.956222C7.61638 0.858857 7.50677 0.781198 7.3849 0.728094C7.26303 0.674991 7.13151 0.647583 6.99858 0.647583C6.86564 0.647583 6.73413 0.674991 6.61225 0.728094C6.49038 0.781198 6.38077 0.858857 6.29025 0.956222C4.89416 2.45778 1.83479 5.77443 0.818145 7.08341C0.270332 7.78872 0.896504 8.94318 1.98533 8.38575L6.36283 6.43591Z"
              fill="white"
            />
          </svg>

          <span className="text-[#fff] text-[14px] font-medium "> scroll</span>
        </div>
  

</motion.div>
</div>
    </div>
      )
    }
    </>
       
  );
}


// export async function getServerSideProps() {
//   const res = await fetch('https://new.8plusit.com/api');
//   const resData= await res.json()
 
//   return { props: { resData } }
// }