import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import error from "@/assets/img/error/error.png";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Studio Gria",
  description: "Aradığınız sayfa bulunamadı. Studio Gria ana sayfasına dönün veya menüden diğer sayfalarımıza göz atın.",
};

// HIZ (27 Eki 2026): kok not-found her sayfanin sinirina dahil oldugu icin
// buradaki istemci kodu tum sitede iner. Eski sablon bileseni (error-main)
// GSAP, ScrollSmoother ve SplitText getiriyordu; animasyonu olmayan sayfalara
// ~175 KB fazladan JS yukluyordu. Bu surum sunucu bileseni, animasyonsuz.
export default function NotFound() {
  return (
    <Wrapper>
      <HeaderEleven />
      <main>
        <div className="tp-error-area pt-190 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-error-wrapper text-center">
                  <Image src={error} alt="404" style={{ height: "auto" }} />
                  <div className="tp-error-content">
                    <h1 className="tp-error-title-sm">Aradığınız sayfa bulunamadı</h1>
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
      </main>
      <FooterTwo topCls="" />
    </Wrapper>
  );
}
