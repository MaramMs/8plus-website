import { Col, Row } from 'antd'
import React from 'react'

const Footer = () => {
  return (
  <footer className='bg-[#1768ac] md:pt-[109px]  md:pb-[77px] flex justify-center items-center'>
 <div className='container'>
 <Row>
  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>@8plus Co</span>
   
  </Col>

  <Col md={{span:8}}>
    
     <span className='text-[#fff] font-medium text-[16px]'>8pluscompany@info</span>
 
  </Col>


  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>Palestine - Gaza</span>
  
  </Col>


</Row>

<Row>
  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>all resver saved</span>
   
  </Col>

  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>+972595365842</span>
 
  </Col>


  <Col md={{span:8}}>
     <span className='text-[#fff] font-medium text-[16px]'>24 h At Work</span>
  
  </Col>


</Row>
 </div>
  </footer>
  )
}

export default Footer