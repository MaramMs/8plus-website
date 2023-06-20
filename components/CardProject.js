import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const CardProject = ({protfolio,filterProject}) => {
  console.log(filterProject , 'filter project');
  return (
    <>
          <div className='w-[378px] h-[632px] rounded-[189px] bg-[red] overflow-hidden'>
          <Link  href={ `/ourworks/${filterProject.id}`} className='rounded-[189px]'>
              <Image src={filterProject.image} alt="slide_image" width={378} height={632} className='object-cover rounded-[189px] w-[378px] h-[632px]'/>
            </Link>
          </div>
            <div className="flex justify-center items-center flex-col md:mt-[61px] mt-[24px] md:mb-[261px] mb-[63px]">
              <h3 className="text-[#000] text-[15px] font-semibold">
                /maram
              </h3>
              <span className="text-[#1768AC] text-[24px] font-medium">
                {filterProject.name}
             
              </span>
            </div>
    </>
  )
}

export default CardProject


