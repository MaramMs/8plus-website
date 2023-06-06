import { Col, Row } from 'antd'
import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdMail} from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import Wrapper from './Wrapper'

const Footer = () => {

   const {t} = useTranslation()
  return (
  <footer className='bg-[#1768ac] bg-[url("/images/footer-img.png")] md:py-[70px]'>


<Wrapper>

<Row className="md:mb-[12px]">
  <Col span={18} md={{span:12}}>
    <img src="/images/logo.png" width='80px' height='24.83px'/>
    <p className='text-[8px] font-light md:text-[10px] md:font-medium text-[#fff] md:w-[277px] md:mt-[9px]'>{t('home-desc')}</p>
  </Col>

  <Col span={6} md={{span:12}}>
    <div className="flex flex-wrap justify-between  md:space-y-[16px] space-y-[14px] md:m-0">
    <div className="flex items-center gap-[4px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2 md:mt-[12px]">
        <span className="text-[#fff] font-medium text-[8px] md:text-[19px]"> 8pluscompany@info</span>
        <IoMdMail className='text-[12px] md:text-[14px]'/>
      </div>
      <div className='flex items-center gap-[25px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2 md:mt-[0px]'>
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px] '>PalestineGaza</span>

      <HiLocationMarker className='text-[12px] md:text-[14px]'/>
   </div>

   <div className="flex items-center gap-[12px] md:gap-[15px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2">
        <span className="text-[#fff] font-medium text-[8px] md:text-[19px] md:mr-[34px]">+972595365842</span>
        <BsTelephoneFill className='text-[12px] md:text-[14px]'/>
      </div>
    
      <div className='flex items-center gap-[30px] md:gap-[10px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2'>
     <span className='text-[#fff] font-medium text-[8px] md:text-[19px] md:mr-[25px]'>
      24hAtWork</span>

      <MdAccessTimeFilled  className='text-[12px] md:text-[14px]'/>
   </div>
    </div>
  </Col>
</Row>
</Wrapper>
  
  </footer>
  )
}

export default Footer