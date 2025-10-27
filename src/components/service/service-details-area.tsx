import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BrandMainArea from "@/components/brand/brand-main-area";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/12.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/13.jpg";

const service_data = [
    {
      id: 1,
      category: "Logo Tasarımı",
      subtitle: "Brand Identity",
      title: "Logo Tasarımı",
      main_text: "Etkileyici bir logo, markanızın dijitaldeki ilk izlenimidir. Hedef kitlenize ulaşan, güçlü, yaratıcı ve akılda kalıcı logolar tasarlıyoruz.",
      description: "Markanızın vizyonuna uygun, tüm dijital ve basılı mecralarda etkili olacak profesyonel logo tasarımları ile fark yaratıyoruz. Özgünlük ve strateji ile tasarım sürecini birleştiriyoruz.",
      features: [
        "Marka odaklı tasarım araştırması",
        "Sektör ve rakip analizi",
        "Çoklu medya uyumlu tasarım",
        "Profesyonel formatlarda teslimat"
      ],
      box_title: "Logo",
      box_desc: "Markanızın kimliğini yansıtan profesyonel logolar tasarlıyor, güçlü bir dijital varlık oluşturuyoruz."
    },
    
    {
      id: 2,
      category: "İçerik Üretimi",
      subtitle: "Content Creation",
      title: "İçerik Üretimi",
      main_text: "Hedef kitlenizi etkileyen ve etkileşimi artıran özgün içerikler üreterek sosyal medya hesaplarınızı canlı tutuyoruz.",
      description: "Markanızın dijital dünyada güçlü bir varlık oluşturması için yaratıcı ve etkili içerik üretim hizmetleri sunuyoruz. Görsel tasarımdan video prodüksiyonuna, metin yazarlığından içerik planlamasına kadar geniş bir yelpazede profesyonel çözümler üretiyoruz. Her içeriği hedef kitlenizin ilgisini çekecek, marka değerlerinizi yansıtacak ve etkileşimi maksimize edecek şekilde tasarlıyoruz.",
      features: [
        "Görsel İçerik Tasarımı",
        "Video & Reels Üretimi",
        "Metin Yazarlığı",
        "İçerik Planlama Takvimi"
      ],
      box_title: "İçerik Üretimi",
      box_desc: "Hedef kitlenizi etkileyen ve etkileşimi artıran özgün içerikler üreterek sosyal medya hesaplarınızı canlı tutuyoruz."
    },
    {
      id: 3,
      category: "Motion-Design",
      subtitle: "Motion-Design",
      title: "Motion-Design",
      main_text: "Markanızın dijital dünyadaki hikayesini hareketle anlatıyoruz. Yaratıcı motion design çözümlerimizle markanızın mesajını dikkat çekici, dinamik ve akılda kalıcı hale getiriyoruz. Görsel iletişimin gücünü, modern animasyon teknikleriyle birleştirerek markanızı dijital platformlarda öne çıkarıyoruz.",
      description: "Her markanın kendine özgü bir dili vardır; biz bu dili hareketle konuşturuyoruz. İster sosyal medya videosu, ister reklam filmi, ister tanıtım animasyonu olsun — tasarımlarımız markanızın kimliğini yansıtır, izleyicide etki bırakır.",
      features: [
        "Motion Graphic Tasarım",
        "Sosyal Medya Animasyonları",
        "Marka Tanıtım Videoları",
        "Reklam ve Kampanya Videoları"
      ],
      box_title: "Motion-Design",
      box_desc: "Marka algınızı güçlendiren, özgün ve yüksek kaliteli görsel içerikler üretiyoruz."
    },
    
    {
      id: 4,
      category: "Sosyal Medya Yönetimi",
      subtitle: "Sosyal Medya Yönetimi",
      title: "Sosyal Medya Yönetimi",
      main_text: "Markanızın dijital dünyadaki sesi, kimliği ve enerjisini sosyal medyada doğru stratejilerle buluşturuyoruz.",
      description: "Profesyonel sosyal medya yönetimiyle hedef kitlenize ulaşmanızı, markanızın görünürlüğünü artırmanızı ve dijital dünyada güçlü bir imaj oluşturmanızı sağlıyoruz. Her marka farklı bir hikaye anlatır; biz bu hikayeyi stratejik planlama, özgün içerik ve etkili iletişim diliyle sosyal medyada hayata geçiriyoruz. Markanızın dijital kimliğini güçlendirmek, takipçi kitlenizle etkileşimi artırmak ve sürdürülebilir bir büyüme sağlamak için kapsamlı çözümler sunuyoruz.",
      features: [
        "Stratejik Sosyal Medya Planlaması",
        "İçerik ve Görsel Üretimi",
        "Performans Analizi ve Raporlama",
        "Reklam ve Kampanya Yönetimir"
      ],
      box_title: "Sosyal Medya Yönetimi",
      box_desc: "Markanızın dijital kimliğini güçlendirmek, takipçi kitlenizle etkileşimi artırmak ve sürdürülebilir bir büyüme sağlamak için kapsamlı çözümler sunuyoruz."
    },
    {
      id: 5,
      category: "Raporlama ve Analiz",
      subtitle: "Raporlama ve Analiz",
      title: "Raporlama ve Analiz",
      main_text: "Veriye dayalı kararlar, markanızın dijital başarısının temelidir.",
      description: "Raporlama ve analiz hizmetlerimizle dijital performansınızı ölçüyor, elde ettiğimiz verilerle markanızı daha etkili stratejilere yönlendiriyoruz. Her paylaşım, her kampanya ve her etkileşim bir veridir. Biz bu verileri anlamlandırarak; markanızın dijital dünyadaki konumunu güçlendirmek, hedef kitlenize daha doğru mesajlar ulaştırmak ve bütçenizi en verimli şekilde kullanmak için detaylı analizler sunuyoruz.",
      features: [
        "Performans Analizi",
        "Aylık ve Haftalık Raporlama",
        "Veri Odaklı Strateji Geliştirme",
        "Rakip ve Pazar Analizi"
      ],
      box_title: "Rapori",
      box_desc: "Raporlama ve analiz hizmetlerimizle dijital performansınızı ölçüyor, elde ettiğimiz verilerle markanızı daha etkili stratejilere yönlendiriyoruz. Her paylaşım, her kampanya ve her etkileşim bir veridir. Biz bu verileri anlamlandırarak; markanızın dijital dünyadaki konumunu güçlendirmek, hedef kitlenize daha doğru mesajlar ulaştırmak ve bütçenizi en verimli şekilde kullanmak için detaylı analizler sunuyoruz."
    }

];


// Kategori eşleme mapping'i
const categoryMapping: { [key: string]: string } = {
  "Logo ve Marka Kimliği": "Logo Tasarımı",
  "İçerik Üretimi": "İçerik Üretimi", 
  "Motion-Design": "Motion-Design",
  "Sosyal Medya Yönetimi": "Sosyal Medya Yönetimi",
  "Raporlama ve Analiz": "Raporlama ve Analiz"
};

export default function ServiceDetailsArea() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('category') || null;
  
  // URL parametresinden gelen kategoriyi eşle, yoksa varsayılan kategori kullan
  const getMappedCategory = (category: string | null) => {
    if (!category) return "Logo Tasarımı";
    return categoryMapping[category] || "Logo Tasarımı";
  };
  
  const [activeCategory, setActiveCategory] = React.useState(() => 
    getMappedCategory(categoryParam)
  );
  
  // URL parametresi değiştiğinde aktif kategoriyi güncelle
  React.useEffect(() => {
    const mappedCategory = getMappedCategory(categoryParam);
    setActiveCategory(mappedCategory);
  }, [categoryParam]);
  
  const activeServiceData = service_data.find(s => s.category === activeCategory);

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {activeServiceData?.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {activeServiceData?.title}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                Dijital dünyada markanızı öne çıkaran etkili sosyal medya yönetimi ve yaratıcı içeriklerle hedef kitlenize doğrudan ulaşmanızı sağlıyoruz.
                  <br />  Studio Gria olarak, markanızın dijital kimliğini doğru analiz ediyor, hedef kitlenize uygun özgün stratejiler geliştiriyoruz.{" "}
                  <br /> Logo tasarımı, kurumsal kimlik, reklam yönetimi ve içerik üretimi gibi birçok alanda sunduğumuz Hedef odaklı kampanyalar, marka bilinirliği artırımı ve etkileşim odaklı içeriklerle {" "}
                </p>
                <p className="tp_title_anim">
                Başarıyı birlikte inşa edelim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {activeServiceData?.main_text}
                </p>
                <p>
                  {activeServiceData?.description}
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {activeServiceData?.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
               
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Hizmetlerimiz</span>
              </div>
              <div className="service-details__right-category">
                 {service_data.map((item) => (
                  <a
                    key={item.id}
                    onClick={() => setActiveCategory(item.category)}
                    className={item.category === activeCategory ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  >
                    {item.category}
                  </a>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4>
                 <span dangerouslySetInnerHTML={{ __html: activeServiceData?.box_title || '' }}></span>
                </h4>
                <p className="mb-20">
                 {activeServiceData?.box_desc}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Konuşalım!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brand Logos Section */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__brand-section pt-80 pb-80">
              <div className="service-details__brand-title text-center mb-60">
                <h4>Çalıştığımız Markalar</h4>
              </div>
              <BrandMainArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
