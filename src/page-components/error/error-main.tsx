"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import error from '@/assets/img/error/error.png';

const ErrorMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* error hero */}
            <div className="tp-error-area pt-190 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center">
                      <Image src={error} alt="404" style={{ height: 'auto' }} />
                      <div className="tp-error-content">
                        <h1 className="tp-error-title-sm">
                          Aradığınız sayfa bulunamadı
                        </h1>
                        <p>
                          Sayfa taşınmış ya da adresi değişmiş olabilir. Aşağıdaki
                          bağlantılardan devam edebilirsiniz.
                        </p>
                        {/* Eski adreslerden gelen ziyaretciyi en cok aranan sayfalara yonlendir */}
                        <ul className="sg-404-baglantilar">
                          <li><Link href="/hizmetler">Hizmetlerimiz</Link></li>
                          <li><Link href="/referanslar">Referanslar</Link></li>
                          <li><Link href="/blog">Blog</Link></li>
                          <li><Link href="/contact">İletişim</Link></li>
                        </ul>
                        <Link className="tp-btn-black-2" href="/teklif">
                          Teklif Alın
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* error hero */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;
