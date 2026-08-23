import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";
import { trackSearch } from "@/utils/meta-pixel";
import { sssKayitlari } from "@/data/sss-data";

// SSS metni artik tek kaynaktan gelir: src/data/sss-data.ts
// Boylece gorunur akordeon ile /faq sayfasindaki FAQPage semasi
// birbirinden ayrisamaz.
type IFaq = {
  id: number;
  question: string;
  answer: string;
};

export const faq_data: IFaq[] = sssKayitlari.map((kayit) => ({
  id: kayit.id,
  question: kayit.soru,
  answer: kayit.cevap,
}));

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

  // Meta Pixel: her tuş vuruşu değil, yazma durduktan sonra tek bir Search olayı
  React.useEffect(() => {
    const term = searchTerm.trim();
    if (term.length < 3) return;
    const timer = setTimeout(() => trackSearch(term), 1200);
    return () => clearTimeout(timer);
  }, [searchTerm]);

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
