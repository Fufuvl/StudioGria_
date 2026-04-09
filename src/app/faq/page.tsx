import React from "react";
import { Metadata } from "next";
import FaqMain from "@/pages/faq/faq-main";

export const metadata: Metadata = {
  title: "Studio Gria - Sıkça Sorulan Sorular",
  description: "Studio Gria hakkında sıkça sorulan sorular ve yanıtları. Hizmetlerimiz, çalışma sürecimiz ve fiyatlandırma hakkında merak ettikleriniz.",
  alternates: { canonical: "https://studiogria.com/faq" },
  openGraph: {
    title: "Studio Gria - Sıkça Sorulan Sorular",
    description: "Studio Gria hakkında sıkça sorulan sorular ve yanıtları. Hizmetlerimiz, çalışma sürecimiz ve fiyatlandırma hakkında merak ettikleriniz.",
    url: "https://studiogria.com/faq",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria SSS" }],
  },
  twitter: {
    title: "Studio Gria - Sıkça Sorulan Sorular",
    description: "Studio Gria hakkında sıkça sorulan sorular ve yanıtları. Hizmetlerimiz, çalışma sürecimiz ve fiyatlandırma hakkında merak ettikleriniz.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI ile içerik üretimi yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Studio Gria olarak yapay zeka destekli görsel içerik üretimi, kampanya kurgusu ve marka estetiğine uygun kreatif çalışmalar hazırlıyoruz. AI üretim sürecini tek başına değil; marka dili, hedef kitle ve performans hedefleriyle birlikte ele alarak daha hızlı ve ölçeklenebilir içerikler sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Ödemeyi kartla yapabiliyor muyuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, kartla ödeme kabul ediyoruz. Süreci markalar ve bireysel müşteriler için mümkün olduğunca kolaylaştırıyoruz; banka/kredi kartıyla ödeme yapabilir, ihtiyacınıza göre size en uygun ödeme yöntemini birlikte belirleyebiliriz.",
      },
    },
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi tam olarak neyi kapsıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sosyal medya yönetimi; markanızın hedef kitlesine uygun içerik planlaması, içerik üretimi (görsel/video), paylaşım takvimi oluşturulması, takipçi etkileşimi, reklam yönetimi ve analiz raporlarının sunulması gibi tüm süreçleri kapsar. Studio Gria olarak bu süreci uçtan uca profesyonel bir şekilde yönetiyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi sosyal medya platformlarıyla çalışıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram, Facebook, TikTok, LinkedIn, Twitter (X) ve YouTube başta olmak üzere birçok platformda içerik üretimi ve yönetimi sağlıyoruz. Hedef kitlenize ve sektörünüze uygun olan platformlarda stratejik çalışmalar yapıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Hizmetlerinizi almak için bir marka ya da şirket olmak zorunda mıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, bireysel markalar, içerik üreticileri veya girişimciler de sosyal medya yönetimi hizmetlerimizden faydalanabilir. Kişisel markanızı dijital dünyada güçlü bir şekilde konumlandırmak için size özel çözümler sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "İçerikler markaya özel mi hazırlanıyor, yoksa hazır şablonlar mı kullanılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm içerikler tamamen markanıza özel olarak hazırlanır. Hedef kitlenize, sektörünüze ve marka kimliğinize uygun özgün görseller, metinler ve stratejiler geliştiriyoruz. Hazır şablonlar kullanmadan, sizin için özel ve özgün bir içerik takvimi oluşturuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Ne kadar sürede sonuç almaya başlarım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sosyal medya stratejileri orta ve uzun vadede etkili sonuçlar verir. İlk etkileri genellikle 4-6 hafta içinde gözlemleyebilirsiniz. Ancak etkileşim artışı, takipçi kazanımı ve marka bilinirliği gibi alanlarda sürdürülebilir başarı için düzenli çalışma ve sabır gereklidir.",
      },
    },
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi hizmetinin fiyatlandırması nasıl yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiyatlandırmamız; talep edilen hizmet kapsamına (içerik sayısı, reklam yönetimi, platform sayısı, raporlama vb.) göre değişiklik göstermektedir. Size en uygun çözümleri sunabilmek için önce ihtiyaç analizi yapıyor, ardından özel bir teklif sunuyoruz.",
      },
    },
  ],
};

const FaqPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqMain />
    </>
  );
};

export default FaqPage;

