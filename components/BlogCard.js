import { Button, Card, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';


const BlogCard = ({ item: { image, created_at, title, description, id } }) => {
  const { t } = useTranslation();
  return (
        
   
    
<Col md={{ span: 8 }}


>

  <motion.div
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  >
  <Card
      
      style={{
        border: 0,
      }}
      bodyStyle={{
        padding: 0,
      }}
      cover={
        <Link href={`/blog/${id}`}>
          <Image
            alt="example"
            src={image}
            width={379}
            height={284}
            className="object-cover w-[379px] h-[284px]"
          />
        </Link>
      }
    >
      <div className="flex mb-[6px] mt-[16px] gap-[4px] items-center">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8846 11.1777L10.2354 9.19091V5.14369C10.2354 4.73674 9.90649 4.40781 9.49955 4.40781C9.09261 4.40781 8.76367 4.73674 8.76367 5.14369V9.55889C8.76367 9.79067 8.87259 10.0092 9.05802 10.1476L12.0015 12.3552C12.1285 12.4509 12.2832 12.5025 12.4422 12.5024C12.6667 12.5024 12.8875 12.4015 13.0317 12.2073C13.2761 11.8827 13.2098 11.4213 12.8846 11.1777Z"
            fill="#949494"
          />
          <path
            d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
            fill="#949494"
          />
        </svg>
        <span>{created_at.split("T")[0]}</span>
      </div>

      <h2 className="relative text-[#0A0A0A] text-opacity-90 text-19 font-450 break-words leading-35 pb-[7px] mb-[7px]">
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8BFB0]"></span>
        {title}
      </h2>

      <p className="md:mb-[13px] text-[#808080] text-[12px] font-[450]">
        {description
          .replace(/<p>|<\/p>|<strong>|<\/strong>/g, "")
          .slice(0, 300)}
      </p>
      <Link href={`/blog/${id}`}>
        <Button className="bg-[#03256C]  flex justify-between items-center gap-[5px] text-right rounded-none text-[#fff] font-[450] text-[12px]">
        {t('learn_more')}
          <svg
            width="28"
            height="9"
            viewBox="0 0 28 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.28062 4.59945L27.5625 4.58151C27.6785 4.58151 27.7898 4.53542 27.8719 4.45337C27.9539 4.37132 28 4.26004 28 4.14401C28 4.02798 27.9539 3.9167 27.8719 3.83465C27.7898 3.75261 27.6785 3.70651 27.5625 3.70651L5.28019 3.72445C5.16416 3.72445 5.05288 3.77054 4.97083 3.85259C4.88878 3.93464 4.84269 4.04592 4.84269 4.16195C4.84269 4.27798 4.88878 4.38926 4.97083 4.47131C5.05288 4.55336 5.16459 4.59945 5.28062 4.59945Z"
              fill="white"
            />
            <path
              d="M0.00019547 4.16719C2.48563 5.08594 5.57001 6.65744 7.48145 8.32344L5.97382 4.16194L7.47576 0C5.56607 1.66819 2.48432 3.24319 0.00019547 4.16719Z"
              fill="white"
            />
          </svg>
        </Button>
      </Link>
    </Card>
  </motion.div>
    
    </Col>

  


  
  
  );
};

export default BlogCard;
