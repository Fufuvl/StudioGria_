import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Design Studio",
    title: "Logo ve Marka Kimliği",
    text: "Markanızın dijital dünyada güçlü ve tutarlı bir kimlik kazanması için özgün logo tasarımları ve kapsamlı marka kimliği çözümleri sunuyoruz. ",
    lists: [
      "Logo Tasarımı",
      "Marka Renk Paleti",
      "Tipografi Seçimi ",
      "Kurumsal Kimlik Kılavuzu",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Design Studio",
    title: "İçerik Üretimi",
    text: "Hedef kitlenizi etkileyen ve etkileşimi artıran özgün içerikler üreterek sosyal medya hesaplarınızı canlı tutuyoruz.",
    lists: [
      "Görsel İçerik Tasarımı",
    "Video & Reels Üretimi",
    "Metin Yazarlığı",
    "İçerik Planlama Takvimi",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Design Studio",
    title: "Motion-Design",
    text: "Sosyal medya ve dijital kampanyalarınız için dikkat çekici hareketli grafikler (motion design) ile marka görünürlüğünüzü artırıyoruz.",
    lists: [
      "Animasyonlu Postlar",
    "Reels & Shorts Animasyonları",
    "Logo Animasyonları",
    "Etkinlik Tanıtım Videoları",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Design Studio",
    title: "Sosyal Medya Yönetimi",
    text: "Paylaşımlarınızın performansını düzenli olarak analiz ediyor, stratejinizi veriye dayalı kararlarla güçlendiriyoruz.",
    lists: [
      "İstatistik Raporları",
    "Etkileşim Analizi",
    "Hedef Kitle Takibi",
    "Strateji Güncellemeleri",
    ],
  },
  {
    id: 5,
    img: ser_img_4,
    subtitle: "Design Studio",
    title: "Raporlama ve Analiz",
    text: "Paylaşımlarınızın performansını düzenli olarak analiz ediyor, stratejinizi veriye dayalı kararlarla güçlendiriyoruz.",
    lists: [
      "İstatistik Raporları",
    "Etkileşim Analizi",
    "Hedef Kitle Takibi",
    "Strateji Güncellemeleri",
    ],
  },
  
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={`/service-details?category=${encodeURIComponent(item.title)}`}
                        >
                          <span className="zikzak-content">
                            Daha <br /> Fazlası
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
