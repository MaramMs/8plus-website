import { Col, Row } from 'antd'
import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdMail} from 'react-icons/io'
import { useTranslation } from 'react-i18next'

const Footer = () => {

   const {t} = useTranslation()
  return (
  <footer className='bg-[#1768ac] md:pt-[109px]  md:pb-[77px] flex justify-center items-center py-[23px]'>
 <div className='container md:px-[128px] px-[22px]'>



<Row className="md:mb-[12px]">
  <Col span={18} md={{span:12}}>
    <img src="/images/logo.png" />
    <p className='text-[8px] font-light md:text-[10px] md:font-medium text-[#fff] md:w-[277px] md:mt-[9px]'>{t('home-desc')}</p>
  </Col>

  <Col span={4} md={{span:12}}>
    <div className="flex flex-wrap justify-between md:space-y-[16px] space-y-[14px]">
    <div className='flex items-center gap-[4px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
    
    <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
     8pluscompany@info
     
     </span>
     <IoMdMail />

     </div>
     <div className='flex items-center gap-[4px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
    
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
      Palestine-Gaza
      </span>
      <HiLocationMarker />

     </div>
     <div className='flex items-center gap-[4px]md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
    
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
      Palestine - Gaza</span>
      <HiLocationMarker />

     </div>
     <div className='flex items-center gap-[4px]md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
    
    <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
     8pluscompany@info
     
     </span>
     <IoMdMail />

     </div>
     {/* <div className='flex items-center gap-[4px]md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
      Palestine - Gaza</span>
      <HiLocationMarker />
      </div>

      <div className="flex items-center gap-[4px]md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2">
        <span className="text-[#fff] font-medium text-[8px] md:text-[19px]">+972595365842</span>
        <BsTelephoneFill />
      </div>


      <div className='flex items-center gap-[4px]md:gap-[13px] text-[#fff] text-[8px] md:text-[19px]md:w-1/2'>
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px]'>
      24 h At Work</span>

      <MdAccessTimeFilled />
   </div> */}
    </div>
  </Col>
</Row>
  
 </div>
  </footer>
  )
}

export default Footer