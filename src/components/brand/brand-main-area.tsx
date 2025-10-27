import React from "react";
import Image from "next/image";
import { UpArrow } from "../svg";

// images
import b_1 from "@/../public/assets/img/inner-about/brand/BeyazBalina.png";
import b_2 from "@/../public/assets/img/inner-about/brand/Effectha.png";
import b_3 from "@/../public/assets/img/inner-about/brand/EntepeHome.png";
import b_4 from "@/../public/assets/img/inner-about/brand/KoçGıda.png";
import b_5 from "@/../public/assets/img/inner-about/brand/KreasSanatAkademisi.png";
import b_6 from "@/../public/assets/img/inner-about/brand/LuxeraParis.png";
import b_7 from "@/../public/assets/img/inner-about/brand/My GymBüyükçekmece.png";
import b_8 from "@/../public/assets/img/inner-about/brand/Projekspert.png";
import b_9 from "@/../public/assets/img/inner-about/brand/Sekiz OnikiKursMerkezi.png";
import b_10 from "@/../public/assets/img/inner-about/brand/The Oba Hotel.png";
import b_11 from "@/../public/assets/img/inner-about/brand/Thy.jpg";

// brand images
const brand_images = [
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_7,
  b_8,
  b_9,
  b_10,
  b_11,
];

export default function BrandMainArea() {
  return (
    <div className="bd-brand-area">
      <div className="container">
        <div className="row gx-80 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {brand_images.map((b, i) => (
            <div className="col" key={i}>
              <div className="bd-brand-item mb-80">
                <Image src={b} alt="brand-img" style={{ height: "auto" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
