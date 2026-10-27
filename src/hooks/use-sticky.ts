'use client'
import { useEffect, useRef, useState } from "react";

// HIZ (27 Eki 2026): jQuery yalniz sitede hic kullanilmayan
// adjustMenuBackground (tp-header-3 sablonu) icin import ediliyordu ve
// header-eleven uzerinden her sayfaya ~85 KB iniyordu. Fonksiyon kaldirildi.
const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  useEffect(() => {
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  function headerFullWidth () {
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader, { passive: true });

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    headerRef,
    headerFullWidth,
  };
};

export default useSticky;
