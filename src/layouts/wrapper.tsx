"use client";
import React from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";
// HIZ (27 Eki 2026): bootstrap.bundle.min (~84 KB) her sayfada yukleniyordu.
// Derlenmis 62 sayfanin hicbirinde data-bs-* yok; menu, offcanvas ve acilir
// pencere React durumuyla calisiyor. Bootstrap'in yalniz CSS'i kullaniliyor.

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop=true }: WrapperProps) => {
  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
    </React.Fragment>
  );
};

export default Wrapper;
