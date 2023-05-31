import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'
import Wrapper from '@/components/Wrapper'
import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[192px]'>
      <Wrapper>
      <div className='flex items-center gap-[11px]'>
            <h1 className='text-[#1768AC] md:text-[36px] font-semibold w-[15%]'>
                Last Blogs
                </h1>    
                <div className='bg-[#D1D1D1] h-[1px]  w-[85%]'></div>    
                
                
    </div>

    <Row gutter={[24,35]} className='mt-[55px]'>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>

<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>

<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
<Col md={{span:8}}>
<BlogCard />
</Col>
    </Row>

    <Link href={'/'} className='flex justify-center items-center my-20 mx-auto border cursor-pointer border-[#03256C] py-[9px] px-[29px] text-[#03256C] text-[14px] font-400 w-[130px] h-[50px]'>
    Show More
    </Link>
      </Wrapper>

      <Footer />




    </div>
  )
}
[]
export default Blog