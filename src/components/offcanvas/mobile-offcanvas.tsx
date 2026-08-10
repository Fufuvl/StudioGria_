import React from "react";
import { CloseTwo, Instagram, Linkdin } from "../svg";
import MobileMenus from "./mobile-menus";

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
              <a href="/" className="d-inline-block" style={{fontWeight:600}}>
                Studio Gria
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
                aria-label="Menüyü kapat"
              >
                <CloseTwo aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            {/* Menu one cikar: sablonun karsilama metni ve foto galerisi kaldirildi */}
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus/>
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
                  <a href="https://www.linkedin.com/company/studio-gria/" target="_blank" rel="noopener noreferrer" aria-label="Studio Gria LinkedIn"><Linkdin aria-hidden="true" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/studiogria/" target="_blank" rel="noopener noreferrer" aria-label="Studio Gria Instagram"><Instagram aria-hidden="true" /></a>
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
