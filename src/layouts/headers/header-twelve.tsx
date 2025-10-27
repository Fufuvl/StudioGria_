import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Wishlist, Zero } from "@/components/svg";
import useSticky from "@/hooks/use-sticky";
import HeaderMenus from "./header-menus";
import logo from "@/assets/img/logo/logo.png";

// prop type
type IProps = {
  // Add any props if the component accepts them
};

export default function HeaderTwelve() {
  const {headerFullWidth } = useSticky();
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-area-2 tp-header-style-2`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-4 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 d-none d-xl-block">
                <div className="tp-header-menu-2 text-center">
                  <nav className="tp-main-menu-content">
                    <HeaderMenus/>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-8 col-6">
                <div className="tp-header-right-2 d-flex align-items-center justify-content-end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
