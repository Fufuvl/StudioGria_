"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/img/logo/logo-white-new.png";
import logoDark from "@/assets/img/logo/logo-dark.png";
import { RightArrow } from "@/components/svg";
import menu_data from "@/data/menu-data";
// Listeler sunucudan gelir (bkz. components/site-baglantilari.tsx); veri
// dosyalari burada ice aktarilmaz, aksi halde tum blog metni her sayfanin
// JS paketine girer.
import { useSiteBaglantilari } from "@/components/site-baglantilari";

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
    { title: "Gizlilik Politikası", link: "/gizlilik" },
  ];

  // Bolge sayfalari footer'dan da baglanir; yerel sayfalarin site icinde
  // yalnizca tek bir yerden erisilebilir olmasi taranmalarini zorlastirirdi.
  const { hizmetler, yazilar, bolgeler, kurum } = useSiteBaglantilari();

  const bolgeMenu = bolgeler.map((bolge) => ({
    title: bolge.ilce,
    link: `/bolgeler/${bolge.slug}`,
  }));

  // Hizmet detay ve blog sayfalari da footer'dan baglanir. Gerekce olculdu:
  // 2 Eyl 2026'da Search Console'da dizine eklenen 16 sayfanin tamami footer'dan
  // site geneli baglanan sayfalardi; yalnizca tek bir hub sayfasindan (/hizmetler,
  // /blog) baglanan 14 sayfanin tamami "kesfedildi, dizine eklenmedi" durumundaydi.
  // Bolge sayfalarinda ise yontem calisti. Ayni yontem bu iki gruba uygulaniyor.
  const hizmetMenu = hizmetler.map((hizmet) => ({
    title: hizmet.ad,
    link: `/hizmetler/${hizmet.slug}`,
  }));

  // Blog listesi tarihe gore siralanir; yeni yazi eklendiginde footer kendiliginden
  // guncellenir, en yeni dort yazi site geneli baglanti alir.
  // Bag metni yazinin kendi basligindan gelir; iki noktadan sonrasi footer'da
  // fazla uzun kaldigi icin atilir, anahtar kelime tasiyan bas kismi kalir.
  const blogMenu = yazilar.map((yazi) => ({
    title: yazi.baslik.split(":")[0].trim(),
    link: `/blog/${yazi.slug}`,
  }));

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
                  <h2 className="tp-footer-2-widget-title">Site Haritası</h2>
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
                  <h2 className="tp-footer-2-widget-title">Hizmetler</h2>
                  <ul>
                    {hizmetMenu.map((item) => (
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
                  <h2 className="tp-footer-2-widget-title">Bölgeler</h2>
                  {/* 17 ilce tek sutunda cok uzuyordu; adlar yan yana akar,
                      tum baglantilar HTML'de kalir (globals.scss) */}
                  <ul className="sg-footer-bolgeler">
                    {bolgeMenu.map((item) => (
                      <li key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-footer-2-widget-menu mt-30">
                  <h2 className="tp-footer-2-widget-title">Blog</h2>
                  <ul>
                    {blogMenu.map((item) => (
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
                <h2 className="tp-footer-2-widget-title">Ofisimiz</h2>
                <div className="tp-footer-2-contact-item">
                  <span>
                    {/* Adres Google Isletme Profili ile birebir ayni yazilir (NAP tutarliligi) */}
                    <a href={kurum.harita} target="_blank" rel="noopener noreferrer">
                      {kurum.sokak}, {kurum.postaKodu} {kurum.ilce}/{kurum.il}
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
                    <a href="mailto:hello@studiogria.com">hello@studiogria.com</a>
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
                  © {new Date().getFullYear()} Studio Gria. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" lang="en" href="https://www.linkedin.com/company/studio-gria/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="mb-10" lang="en" href="https://www.instagram.com/studiogria/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
