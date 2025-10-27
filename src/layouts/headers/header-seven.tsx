'use client';
import React from "react";
import Link from "next/link";
import useSticky from "@/hooks/use-sticky";
import Image from "next/image";

// prop type
type IProps = {
  // Add any props if needed, but not specified in the new_code
};

export default function HeaderSeven() {
  const { sticky } = useSticky();
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-7-area tp-header-7-style-2 tp-header-style-transparent ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-4 col-4">
                <div className="tp-header-7-logo">
                  <Link className="logo-1" href="/">
                    <span className="visually-hidden">Studio Gria</span>
                  </Link>
                  <Link className="logo-2" href="/">
                    <span className="visually-hidden">Studio Gria</span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 d-none d-xl-block">
              </div>
              <div className="col-xl-2 col-lg-6 col-md-8 col-4">
                <div className="tp-header-7-right d-flex align-items-center justify-content-end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
