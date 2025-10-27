import React from "react";
import Image from "next/image";
import { CloseTwo, Instagram, Linkdin } from "../svg";

// images
import kien_1 from "@/assets/img/home-05/project/kien/1.jpg";
import kien_2 from "@/assets/img/home-05/project/kien/2.jpg";
import kien_3 from "@/assets/img/home-05/project/kien/3.jpg";
import kien_4 from "@/assets/img/home-05/project/kien/4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [kien_1, kien_2, kien_3, kien_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#" className="d-inline-block" style={{fontWeight:600}}>
                Studio Gria
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Merhaba!</h3>
              <p>Studio Gria olarak sizlere en iyi deneyimi sunuyoruz.</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus/>
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Bilgi</h3>

              <ul>
                <li>
                  <a href="tel:+905388654405">+90 538 865 44 05</a>
                </li>
                <li>
                  <a href="mailto:hello@studiogria.com">hello@studiogria.com</a>
                </li>
                <li>
                  <a href="#">İstanbul, Türkiye</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Bizi takip edin</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/studio-gria/" target="_blank" rel="noopener noreferrer"><Linkdin /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/studiogria/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
