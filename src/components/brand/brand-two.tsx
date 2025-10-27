import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "@/../public/assets/img/inner-about/brand/BeyazBalina.png";
import b_2 from "@/../public/assets/img/inner-about/brand/Effectha.png";
import b_3 from "@/../public/assets/img/inner-about/brand/EntepeHome.png";
import b_4 from "@/../public/assets/img/inner-about/brand/KoçGıda.png";
import b_5 from "@/../public/assets/img/inner-about/brand/KreasSanatAkademisi.png";
import b_6 from "@/../public/assets/img/inner-about/brand/LuxeraParis.png";
import b_7 from "@/../public/assets/img/inner-about/brand/My GymBüyükçekmece.png";
import b_8 from "@/../public/assets/img/inner-about/brand/Projekspert.png";

// brand_data
const brand_data = [
  {
    id: 1,
    brand: b_1,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 2,
    brand: b_2,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 3,
    brand: b_3,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 4,
    brand: b_4,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 5,
    brand: b_5,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 6,
    brand: b_6,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 7,
    brand: b_7,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
  {
    id: 8,
    brand: b_8,
    texts: [
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
      "Studio Gria",
    ],
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Image src={item.brand} alt="brand" width={150} height={100} style={{ objectFit: 'contain' }} />
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
