import Footer from '@/components/Footer'
import { Col, Row } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {AiFillCaretLeft} from 'react-icons/ai'

const Work = () => {
    const {t} = useTranslation()
  return (
<>
<div className='md:pt-[129px] container'>
      <Row>
        <Col md={{span:18}}>
        <h1 className='text-[#1768ac] text-[36px] font-medium'>project one</h1>
       <div className='flex gap-[5px] '>
       <AiFillCaretLeft className='text-[#03256C] text-[31px]' />
        <p className='text-[#949494] text-[16px] font-medium break-words '>
            {t('home-desc')}
        </p>
       </div>

       <div className='bg-[#F5F5F5] p-[13px] md:mt-[36px]'>
        <ul className='flex gap-[38px] list-disc list-inside'>
            <li className='text-[#000] text-[20px] font-medium'>
            Digital Sound Company
            </li>

            <li className='text-[#000] text-[20px] font-medium'>
            Digital Sound Company
            </li>
            <li className='text-[#000] text-[20px] font-medium'>
            Digital Sound Company
            </li>
        </ul>
       </div>
        </Col>
      </Row>


      <Row gutter={[24,24]} className='md:mt-[84.74px] md:mb-[127.23px]'>
        <Col md={{span:12}}>
            <div className='rounded-[100px]'>
                <img src='/images/works/work1.png' className='w-[580px]'/>
            </div>

        </Col>

        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work2.png'/>
            </div>

        </Col>

        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work1.png'/>
            </div>

        </Col>
        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work2.png'/>
            </div>

        </Col>

        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work1.png'/>
            </div>

        </Col>

        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work2.png'/>
            </div>

        </Col>
        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work1.png'/>
            </div>

        </Col>
        <Col md={{span:12}}>
            <div className=''>
                <img src='/images/works/work2.png'/>
            </div>

        </Col>
      </Row>

    

    </div>
<Footer />
</>
  )
}

export default Work