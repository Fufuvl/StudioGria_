"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/img/logo/logo-white-new.png";
import logoDark from "@/assets/img/logo/logo-dark.png";
import { RightArrow } from "@/components/svg";
import menu_data from "@/data/menu-data";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const pagesMenu =
    menu_data.find((item) => item.title === "Sayfalar")?.pages_mega_menu?.first
      .submenus ?? [];
  const footerMenu = [
    { title: "Anasayfa", link: "/" },
    { title: "Sayfalar", link: "#", submenus: pagesMenu },
    { title: "AI Destekli Çözümler", link: "/ai-destekli-cozumler" },
    { title: "Portfolyo", link: "/portfolio-standard" },
    { title: "İletişim", link: "/contact" },
  ];

  const handleToggle = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title));
  };

  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image 
                        src={logoWhite} 
                        alt="Studio Gria" 
                        width={150}
                        height={40}
                        style={{height: 'auto', width: 'auto', maxHeight: '40px'}}
                      />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image 
                        src={logoWhite} 
                        alt="Studio Gria" 
                        width={150}
                        height={40}
                        style={{height: 'auto', width: 'auto', maxHeight: '40px'}}
                      />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image 
                        src={logoDark} 
                        alt="Studio Gria" 
                        width={150}
                        height={40}
                        style={{height: 'auto', width: 'auto', maxHeight: '40px'}}
                      />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Yardıma mı ihtiyacınız var? <br /> Birlikte çözelim!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Site Haritası</h4>
                  <ul>
                    {footerMenu.map((item) => (
                      <li
                        key={item.title}
                        className={item.submenus?.length ? "is-submenu" : ""}
                      >
                        {item.submenus?.length ? (
                          <>
                            <span
                              className={`tp-footer-2-menu-parent tp-footer-submenu-toggle ${
                                openSubmenu === item.title ? "open" : ""
                              }`}
                              onClick={() => handleToggle(item.title)}
                            >
                              {item.title}
                              <svg
                                className="tp-footer-submenu-arrow"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </span>
                            <ul
                              className="tp-footer-submenu-list"
                              style={{
                                maxHeight: openSubmenu === item.title ? "500px" : "0",
                                overflow: "hidden",
                                transition: "max-height 0.35s ease",
                              }}
                            >
                              {item.submenus.map((subItem) => (
                                <li key={subItem.link}>
                                  <Link href={subItem.link}>{subItem.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link href={item.link}>{item.title}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Ofisimiz</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                      href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank"
                    >
                      İstanbul, Türkiye
                    </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+905388654405">+90 538 865 44 05</a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:hello@studiogria.com">E: hello@studiogria.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  Tüm hakları saklıdır — {new Date().getFullYear()} © Studio Gria
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="https://www.linkedin.com/company/studio-gria/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="mb-10" href="https://www.instagram.com/studiogria/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
