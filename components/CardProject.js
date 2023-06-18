import Link from 'next/link'
import React from 'react'

const CardProject = ({protfolio}) => {
  console.log(protfolio.image , 'protfolio from card Project');
  return (
    <>
           <Link href={ `/ourworks/${protfolio.service_id}`}>
              <img src={protfolio.image} alt="slide_image" />
            </Link>
            <div className="flex justify-center items-center flex-col md:mt-[61px] mt-[24px] md:mb-[261px] mb-[63px]">
              <h3 className="text-[#000] text-[15px] font-semibold">
                {protfolio.name}
              </h3>
              <span className="text-[#1768AC] text-[24px] font-medium">
                {protfolio.description}
              </span>
            </div>
    </>
  )
}

export default CardProject