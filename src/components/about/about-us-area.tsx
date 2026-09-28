import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hand } from "../svg";
import { hizmetler } from "@/data/hizmet-data";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/72.jpg";
import ab_2 from "@/assets/img/inner-about/about/5.jpg";
import ab_3 from "@/assets/img/inner-about/about/4.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="Studio Gria ekibinin sahada çekim hazırlığı"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="Studio Gria prodüksiyonundan marka çekimi karesi"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="Studio Gria prodüksiyonundan mekan çekimi karesi"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Merhaba!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                Studio Gria; sosyal medya yönetimi, fotoğraf ve video prodüksiyon,
                reklam yönetimi ve marka kimliğini tek ekipte yürüten bir dijital
                medya ajansıdır. İçeriği planlayan, çeken ve reklamını yöneten
                aynı ekiptir.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h2 className="ab-about-category-title">
                    Neler<br />
                    <span> yapıyoruz? </span>
                  </h2>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {hizmetler.slice(0, 5).map((h) => (
                          <li key={h.slug}>
                            <Link href={`/hizmetler/${h.slug}`}>{h.ad}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        {hizmetler.slice(5).map((h) => (
                          <li key={h.slug}>
                            <Link href={`/hizmetler/${h.slug}`}>{h.ad}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
