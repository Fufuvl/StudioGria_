import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import styles from "../blog/blog.module.scss";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

// Bu sayfa Google tarafindan Mart 2026'dan beri araniyor ve 404 donuyordu.
// Ayrica formda kisisel veri toplandigi, Google Analytics ve Meta Pixel
// calistigi icin bir aydinlatma metni zaten gerekliydi.

const sayfaBaslik = "Gizlilik Politikası ve KVKK Aydınlatma Metni | Studio Gria";
const sayfaAciklama =
  "Studio Gria olarak topladığımız kişisel verileri, kullanım amaçlarını, üçüncü taraf hizmetleri ve KVKK kapsamındaki haklarınızı açıklıyoruz.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/gizlilik" },
  openGraph: { title: sayfaBaslik, description: sayfaAciklama, url: "/gizlilik" },
  twitter: { title: sayfaBaslik, description: sayfaAciklama },
};

type Bolum = { baslik: string; paragraflar?: string[]; liste?: string[] };

const bolumler: Bolum[] = [
  {
    baslik: "Hangi verileri topluyoruz",
    paragraflar: [
      "Sitemizdeki teklif ve iletişim formlarını doldurduğunuzda yalnızca sizin girdiğiniz bilgileri alırız:",
    ],
    liste: [
      "Ad soyad",
      "Telefon numarası",
      "E-posta adresi (isteğe bağlı)",
      "Sektör ve hedefinize dair yazdıklarınız",
      "İletişim formunda konu ve mesaj metni",
    ],
  },
  {
    baslik: "Bu verileri niçin kullanıyoruz",
    paragraflar: [
      "Formu doldurmanızın tek sonucu, size dönüş yapmamız ve talebinize uygun bir teklif hazırlamamızdır. Verilerinizi pazarlama listesine eklemiyor, üçüncü kişilere satmıyor ve reklam amacıyla paylaşmıyoruz.",
      "Bize ulaşan bilgiler, teklif süreci kapandıktan sonra yalnızca geçmiş görüşme kaydı olarak posta kutumuzda kalır.",
    ],
  },
  {
    baslik: "Kullandığımız üçüncü taraf hizmetler",
    paragraflar: [
      "Sitenin çalışması ve ölçümlenmesi için aşağıdaki hizmetlerden yararlanıyoruz. Her biri kendi gizlilik politikasına tabidir:",
    ],
    liste: [
      "Vercel: sitenin barındırılması ve güvenlik korumaları",
      "Resend: form bildirimlerinin e-posta olarak iletilmesi",
      "Google Analytics: ziyaretçi sayısı ve sayfa görüntüleme istatistikleri",
      "Meta Pixel: reklam performansının ölçümlenmesi",
      "WhatsApp: formdan devam etmeyi seçtiğinizde açılan mesajlaşma kanalı",
    ],
  },
  {
    baslik: "Çerezler ve ölçümleme",
    paragraflar: [
      "Google Analytics ve Meta Pixel, ziyaretinizi anonim biçimde ölçmek için tarayıcınıza çerez yerleştirebilir. Bu çerezler kimliğinizi tespit etmek için değil, hangi sayfaların ilgi gördüğünü ve reklamların işe yarayıp yaramadığını anlamak için kullanılır.",
      "Tarayıcı ayarlarınızdan çerezleri engelleyebilirsiniz. Bu durumda site çalışmaya devam eder, yalnızca ölçümleme yapılamaz.",
    ],
  },
  {
    baslik: "Formlarda bot koruması",
    paragraflar: [
      "Formlarımız otomatik gönderimlere karşı korunmaktadır. Bu koruma, gönderimin gerçek bir tarayıcıdan gelip gelmediğini teknik olarak doğrular ve size hiçbir ek adım yüklemez. Bu doğrulama sırasında kişisel veriniz işlenmez.",
    ],
  },
  {
    baslik: "Verilerinizin saklanması",
    paragraflar: [
      "Form gönderimleri e-posta olarak hello@studiogria.com adresine iletilir ve kurumsal posta kutumuzda saklanır. Verilerinizin silinmesini istediğinizde talebiniz üzerine kayıtlardan kaldırırız.",
    ],
  },
  {
    baslik: "KVKK kapsamındaki haklarınız",
    paragraflar: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yanlış işlenmişse düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz.",
      "Bu haklarınızı kullanmak için hello@studiogria.com adresine yazmanız yeterlidir. Talebinizi en geç otuz gün içinde yanıtlarız.",
    ],
  },
  {
    baslik: "İletişim",
    paragraflar: [
      "Studio Gria, Mimaroba Mahallesi, Mustafa Kemal Bulvarı No 18 Demir Plaza, 34535 Büyükçekmece / İstanbul. E-posta: hello@studiogria.com, telefon: +90 538 865 44 05.",
    ],
  },
];

const sayfaSemasi = grafSemasi([
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/gizlilik#sayfa`,
    url: `${SITE_URL}/gizlilik`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    publisher: { "@id": KIMLIK.kurulus },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Gizlilik politikası", yol: "/gizlilik" },
  ]),
]);

export default function GizlilikPage() {
  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
        />
        <article>
          <header className={styles.yaziHero}>
            <div className={`${styles.kapsayici} ${styles.dar}`}>
              <span className={styles.rozet}>Yasal</span>
              <h1 className={styles.yaziBaslik}>
                Gizlilik Politikası ve KVKK Aydınlatma Metni
              </h1>
              <div className={styles.kunye}>
                <span>Son güncelleme: 23 Ağustos 2026</span>
              </div>
            </div>
          </header>

          <div className={styles.govde}>
            <div className={`${styles.kapsayici} ${styles.dar}`}>
              <p className={styles.giris}>
                Studio Gria olarak yalnızca size dönüş yapabilmek için gereken
                bilgileri topluyoruz. Bu sayfada hangi verileri aldığımızı, niçin
                aldığımızı ve bunlar üzerinde hangi haklara sahip olduğunuzu
                sade bir dille açıklıyoruz.
              </p>

              {bolumler.map((bolum) => (
                <section className={styles.bolum} key={bolum.baslik}>
                  <h2 className={styles.bolumBaslik}>{bolum.baslik}</h2>
                  {bolum.paragraflar?.map((paragraf) => (
                    <p className={styles.paragraf} key={paragraf.slice(0, 40)}>
                      {paragraf}
                    </p>
                  ))}
                  {bolum.liste && (
                    <ul className={styles.maddeler}>
                      {bolum.liste.map((madde) => (
                        <li key={madde.slice(0, 40)}>{madde}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <Link className={styles.geri} href="/">
                Ana sayfaya dön
              </Link>
            </div>
          </div>
        </article>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
