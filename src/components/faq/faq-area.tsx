import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "Sosyal medya yönetimi tam olarak neyi kapsıyor?",
    answer:
      "Sosyal medya yönetimi; markanızın hedef kitlesine uygun içerik planlaması, içerik üretimi (görsel/video), paylaşım takvimi oluşturulması, takipçi etkileşimi, reklam yönetimi ve analiz raporlarının sunulması gibi tüm süreçleri kapsar. Studio Gria olarak bu süreci uçtan uca profesyonel bir şekilde yönetiyoruz.",
  },
  {
    id: 2,
    question: "Hangi sosyal medya platformlarıyla çalışıyorsunuz?",
    answer:
      "Instagram, Facebook, TikTok, LinkedIn, Twitter (X) ve YouTube başta olmak üzere birçok platformda içerik üretimi ve yönetimi sağlıyoruz. Hedef kitlenize ve sektörünüze uygun olan platformlarda stratejik çalışmalar yapıyoruz.",
  },
  {
    id: 3,
    question: "Hizmetlerinizi almak için bir marka ya da şirket olmak zorunda mıyım?",
    answer:
      "Hayır, bireysel markalar, içerik üreticileri veya girişimciler de sosyal medya yönetimi hizmetlerimizden faydalanabilir. Kişisel markanızı dijital dünyada güçlü bir şekilde konumlandırmak için size özel çözümler sunuyoruz.",
  },
  {
    id: 4,
    question: "İçerikler markaya özel mi hazırlanıyor, yoksa hazır şablonlar mı kullanılıyor?",
    answer:
      "Tüm içerikler tamamen markanıza özel olarak hazırlanır. Hedef kitlenize, sektörünüze ve marka kimliğinize uygun özgün görseller, metinler ve stratejiler geliştiriyoruz. Hazır şablonlar kullanmadan, sizin için özel ve özgün bir içerik takvimi oluşturuyoruz.",
  },
  {
    id: 5,
    question: "Ne kadar sürede sonuç almaya başlarım?",
    answer:
      "Sosyal medya stratejileri orta ve uzun vadede etkili sonuçlar verir. İlk etkileri genellikle 4-6 hafta içinde gözlemleyebilirsiniz. Ancak etkileşim artışı, takipçi kazanımı ve marka bilinirliği gibi alanlarda sürdürülebilir başarı için düzenli çalışma ve sabır gereklidir.",
  },
  {
    id: 6,
    question: "Sosyal medya yönetimi hizmetinin fiyatlandırması nasıl yapılıyor?",
    answer:
      "Fiyatlandırmamız; talep edilen hizmet kapsamına (içerik sayısı, reklam yönetimi, platform sayısı, raporlama vb.) göre değişiklik göstermektedir. Size en uygun çözümleri sunabilmek için önce ihtiyaç analizi yapıyor, ardından özel bir teklif sunuyoruz",
  },
];

export default function FaqArea() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredFaqs, setFilteredFaqs] = React.useState(faq_data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === "") {
      setFilteredFaqs(faq_data);
    } else {
      const filtered = faq_data.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term)
      );
      setFilteredFaqs(filtered);
    }
  };

  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((item) => (
                      <FaqItem key={item.id} item={item} />
                    ))
                  ) : (
                    <div className="no-results" style={{padding: '20px', textAlign: 'center', color: '#666'}}>
                      <p>Arama kriterlerinize uygun sonuç bulunamadı.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                 Sık sorulan soruların cevaplarını burada bulabilirsiniz.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input 
                  type="text" 
                  placeholder="Soru ara..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
