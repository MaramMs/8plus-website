import { Col, Row } from 'antd'
import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdMail} from 'react-icons/io'

const Footer = () => {
  return (
  <footer className='bg-[#1768ac] md:pt-[109px]  md:pb-[77px] flex justify-center items-center'>
 <div className='container px-[128px]'>
 <Row className='md:mb-[12px]'>
  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>@8plus Co</span>
   
  </Col>

  <Col md={{span:8}}>
  <div className='flex items-center gap-[13px] text-[#fff] text-[19px]'>
    
     <span className='text-[#fff] font-medium text-[16px]'>
      8pluscompany@info
      
      </span>
      <IoMdMail />

      </div>
 
  </Col>


  <Col md={{span:8}}>
  <div className='flex items-center gap-[13px] text-[#fff] text-[19px]'>
     <span className='text-[#fff] font-medium text-[16px]'>
      Palestine - Gaza</span>
      <HiLocationMarker />
      </div>
  
  </Col>


</Row>

<Row className='md:mb-[12px]'>
  <Col md={{span:8}}>

     <span className='text-[#fff] font-medium text-[16px]'>all resver saved</span>
   
  </Col>

  <Col md={{span:8}}>
   
   <div className='flex items-center gap-[35px] text-[#fff] text-[19px]'>
     <span className='text-[#fff] font-medium text-[16px]'>
      +972595365842</span>
      <BsTelephoneFill />
   </div>
 
  </Col>


  <Col md={{span:8}}>
   <div className='flex items-center gap-[33px] text-[#fff] text-[19px]'>
     <span className='text-[#fff] font-medium text-[16px]'>
      24 h At Work</span>

      <MdAccessTimeFilled />
   </div>
  
  </Col>


</Row>
 </div>
  </footer>
  )
}

export default Footer