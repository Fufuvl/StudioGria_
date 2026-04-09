'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import logoDark from "@/assets/img/logo/logo-dark.png";
import logoWhite from "@/assets/img/logo/logo-white-new.png";

// prop type 
type IProps = {
  transparent?: boolean;
  cls?: string;
  lightContent?: boolean;
}
export default function HeaderEleven({
  transparent=false,
  cls='',
  lightContent=false,
}: IProps) {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = mounted && resolvedTheme === "dark";
  const useLightHeader = lightContent || isDarkTheme;
  const currentLogo =
    transparent && !sticky ? logoWhite : useLightHeader ? logoWhite : logoDark;

  return (
    <>
      <header className="tp-header-height z-index-5" ref={headerRef}>  
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${
            transparent ? "transparent" : "tp-inner-header-style-2"
          } ${useLightHeader ? "tp-inner-header-white" : ""} tp-inner-header-mob-space ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  <Link href="/">
                    <Image 
                      src={currentLogo}
                      alt="Studio Gria" 
                      width={150}
                      height={40}
                      style={{height: 'auto', width: 'auto', maxHeight: '40px'}}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              {/* mobile burger */}
              <div className="col-6 d-xl-none text-end">
                <button
                  aria-label="Open Menu"
                  className="tp-offcanvas-open-btn"
                  onClick={() => setOpenOffcanvas(true)}
                  style={{ background: 'transparent', border: 0, fontSize: 24 }}
                >
                  <i className="fa-light fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileOffcanvas openOffcanvas={openOffcanvas} setOpenOffcanvas={setOpenOffcanvas} />
      </header>
    </>
  );
}
