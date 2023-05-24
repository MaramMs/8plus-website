import HorizontalScroll from "@/components/HorizontalScroll";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import {CgScrollV} from 'react-icons/cg'

export default function Home() {
  const {t} = useTranslation()
  return (
    <div className="relative h-screen w-full bg-[url('/images/bg-home.png')] bg-cover flex justify-center items-center flex-col">
      <div className="absolute  home"></div>
   <div className="container flex justify-center items-center flex-col z-20">
     
   <h1 className="text-[#fff] text-[30px] font-semibold text-center w-[782px] break-words md:mb-[15px]">
      {t('home-title')}
      </h1>
      <p className="text-[14px] font-medium text-[#fff] text-center w-[580px] break-words md:mb-[64px]">
      {t('home-desc')}
      </p>
      <div className="flex justify-center items-center gap-[11px]">
        <Button className="rounded-[24px] bg-[#fff] border-none p-[16px] flex justify-center items-center text-[#1768ac] text-[12px] font-semibold ">
         {t('home-btn-start-project')}
        </Button>
        <Button className="rounded-[24px] border border-[#fff] bg-transparent p-[16px] text-[12px] font-semibold flex justify-center items-center text-[#fff]">
{t('home-btn-more')}
        </Button>
      </div>

      <CgScrollV />
   </div>

   {/* <HorizontalScroll /> */}
    </div>
  );
}


//inset-0 bg-gradient-to-r from-[#2563eba3] to-[#1e3a8ae6]