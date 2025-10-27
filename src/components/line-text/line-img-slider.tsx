import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import new_img_1 from "@/assets/img/inner-service/sercive-details/10.jpg";
import new_img_2 from "@/assets/img/inner-service/sercive-details/12.jpg";
import new_img_3 from "@/assets/img/inner-service/sercive-details/14.jpg";


// images
const port_images = [new_img_1, new_img_2, new_img_3, new_img_1, new_img_2, new_img_3];

export default function LineImgSlider() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120">
      <div className="swiper tp-img-slide">
        <Marquee speed={150}>
          {port_images.map((imgSrc, index) => (
            <div
              key={index}
              className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
              style={{marginRight: '40px'}}
            >
              <Image src={imgSrc} alt="port-img" width={460} height={260} style={{objectFit:'cover'}} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
