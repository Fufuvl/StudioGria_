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

  const footerMenu = [
    { title: "Anasayfa", link: "/" },
    { title: "Hakkımızda", link: "/about-us" },
    { title: "Hizmetlerimiz", link: "/hizmetler" },
    { title: "AI Destekli Çözümler", link: "/ai-destekli-cozumler" },
    { title: "Referanslar", link: "/referanslar" },
    { title: "Blog", link: "/blog" },
    { title: "Hizmet Bölgelerimiz", link: "/bolgeler" },
    { title: "Sıkça Sorulanlar", link: "/faq" },
    { title: "Teklif Al", link: "/teklif" },
    { title: "İletişim", link: "/contact" },
  ];

  // Bolge sayfalari footer'dan da baglanir; yerel sayfalarin site icinde
  // yalnizca tek bir yerden erisilebilir olmasi taranmalarini zorlastirirdi.
  const bolgeMenu = [
    { title: "Büyükçekmece", link: "/bolgeler/buyukcekmece-sosyal-medya-ajansi" },
    { title: "Beylikdüzü", link: "/bolgeler/beylikduzu-sosyal-medya-ajansi" },
    { title: "Esenyurt", link: "/bolgeler/esenyurt-sosyal-medya-ajansi" },
    { title: "Avcılar", link: "/bolgeler/avcilar-sosyal-medya-ajansi" },
    { title: "Başakşehir", link: "/bolgeler/basaksehir-sosyal-medya-ajansi" },
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
                      <li key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Bölgeler</h4>
                  <ul>
                    {bolgeMenu.map((item) => (
                      <li key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
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
                      href="https://www.google.com/maps/search/?api=1&query=Studio+Gria%2C+Mimaroba+Mahallesi+Mustafa+Kemal+Bulvar%C4%B1+No+18+Demir+Plaza%2C+34535+B%C3%BCy%C3%BCk%C3%A7ekmece%2F%C4%B0stanbul"
                      target="_blank"
                      rel="noopener noreferrer"
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
