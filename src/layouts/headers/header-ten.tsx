import React from "react";
import Link from "next/link";

export default function HeaderTen() {
  return (
    <>
    <header className="tp-header-height z-index-5">
      <div className="tp-inner-header-area tp-inner-header-style-3 tp-inner-header-mob-space pt-90 pl-80 pr-80">
        <div className="container container-1800">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="tp-inner-header-logo tp-header-logo">
                <Link href="/">
                  <h1 style={{color: 'white', fontSize: '26px', fontWeight: '700'}}>Studio Gria</h1>
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
              <div className="tp-inner-header-right-wrap d-flex align-items-center justify-content-end">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
