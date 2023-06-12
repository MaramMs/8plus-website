import Link from 'next/link'
import React from 'react'

const CardProject = ({project}) => {
  return (
    <>
           <Link href="/ourworks/1">
              <img src={project.img} alt="slide_image" />
            </Link>
            <div className="flex justify-center items-center flex-col md:mt-[61px] mt-[24px] md:mb-[261px] mb-[63px]">
              <h3 className="text-[#000] text-[15px] font-semibold">
                {project.title}
              </h3>
              <span className="text-[#1768AC] text-[24px] font-medium">
                {project.desc}
              </span>
            </div>
    </>
  )
}

export default CardProject