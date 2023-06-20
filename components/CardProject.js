import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const CardProject = ({protfolio,filterProject}) => {
  console.log(filterProject , 'filter project');
  return (
    <>
    
           <Link  href={ `/ourworks/${filterProject.service_id}`}>
              <Image src={filterProject.image} alt="slide_image" width={500} height={500}/>
            </Link>
            <div className="flex justify-center items-center flex-col md:mt-[61px] mt-[24px] md:mb-[261px] mb-[63px]">
              <h3 className="text-[#000] text-[15px] font-semibold">
                {/* {protfolio.name} */}
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


