import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import details_thumb_1 from '@/assets/img/inner-project/showcase/15.jpg';
import details_thumb_2 from '@/assets/img/inner-project/showcase/16.jpg';
import details_thumb_3 from '@/assets/img/inner-project/showcase/3.jpg';
import hero_gorsel from '@/assets/img/inner-project/showcase/background.jpg';
import social_data from '@/data/social-data';
import AnasayfaHizmetler, { AnasayfaHizmet } from '@/components/anasayfa-hizmetler';
import HeroVideo from '@/components/hero-video';
import {
  AnasayfaKanit,
  AnasayfaRehberler,
  AnasayfaBolgeler,
  AnasayfaKapanis,
  AnasayfaYazi,
} from '@/components/anasayfa-ek';

type Props = { hizmetler: AnasayfaHizmet[]; yazilar: AnasayfaYazi[] };

export default function PortfolioDetailsShowcaseArea({ hizmetler, yazilar }: Props) {
  return (
    <>
     {/* hero: solda metin kolonu, sagda gorsel; yazi gorselin ustunde durmaz */}
      <div className="sg-split-hero">
        <div className="sg-split-metin">
          {/* Rozet H1'in parcasi: gorunum ayni kalir, baslik "sosyal medya
              ajansi" sorgusunu tasir. */}
          <h1 className="sg-split-baslik">
            <span className="sg-split-rozet sg-gir sg-gir-1">
              İstanbul merkezli sosyal medya ajansı
            </span>
            <span className="sg-split-slogan sg-gir sg-gir-2">
              İyi içerik izlenir.
              <br />
              Doğru içerik <em>satar.</em>
            </span>
          </h1>
          <p className="sg-split-alt sg-gir sg-gir-3">
            İçerik, tasarım ve reklam tek elden. Sonuç tahmin edilmez, ölçülür.
          </p>
          <div className="sg-hero-actions sg-gir sg-gir-4">
            <Link className="sg-split-cta" href="/teklif">
              Teklif Al
            </Link>
            <Link className="sg-split-link" href="/referanslar">
              Referanslarımızı görün
            </Link>
          </div>
          <div className="sg-split-sosyal sg-gir sg-gir-5">
            {social_data.map((s) => (
              <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        {/* LCP ogesi: CSS arka plani yerine next/image. Onceden yuklenir,
            WebP/AVIF olarak ve ekran genisligine gore boyutlanarak sunulur. */}
        <div className="sg-split-gorsel">
          <Image
            src={hero_gorsel}
            alt="The Oba Hotel için havadan çekilmiş tanıtım karesi"
            fill
            priority
            sizes="(max-width: 991px) 100vw, 54vw"
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Sahadan sessiz dongu: The Oba Hotel tanitim filminden 16 sn.
              Kaynak: Gria - Firmalar/The Oba Hotel/Cikti Reels/Tanitim-ObaHotel26-27.mp4 */}
          <HeroVideo
            masaustu="/assets/video/oba-hero-1280.mp4"
            mobil="/assets/video/oba-hero-854.mp4"
            etiket="Sahadan: The Oba Hotel, drone ve tanıtım filmi"
          />
        </div>
      </div>
      {/* hero */}

      {/* sosyal kanit: rakamlar ve referans seridi */}
      <AnasayfaKanit />

      {/* hizmetler: ana sayfadan detay sayfalarina ic link */}
      <AnasayfaHizmetler hizmetler={hizmetler} />
      {/* hizmetler */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-4">
                  <div className="showcase-details-overview-left">
                      <h2 className="showcase-details-subtitle">Hakkımızda</h2>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right">
                      <p className="tp_title_anim">Studio Gria, İstanbul merkezli tam hizmet bir sosyal medya ajansıdır. İçerik planı, fotoğraf ve video çekimi, tasarım, Meta ve Google reklam yönetimi tek ekipte yürür; bu yüzden markanızın hesabı başka ajanslara parça parça dağılmaz. Otelden restorana, spor kulübünden e-ticaret markasına kadar 39&apos;dan fazla markayla çalıştık.</p>
                      <div className="showcase-details-overview-info">
                        <div className="showcase-details-overview-info-item tp_fade_bottom">
                            <div className="row align-items-center">
                              <div className="col-6">
                                  <div className="showcase-details-overview-info-left">
                                    <span>Kimliğimiz</span>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="showcase-details-overview-info-right">
                                    <span>Studio Gria</span>
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div className="showcase-details-overview-info-item tp_fade_bottom">
                            <div className="row align-items-center">
                              <div className="col-6">
                                  <div className="showcase-details-overview-info-left">
                                    <span>Konumumuz</span>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="showcase-details-overview-info-right">
                                    <span>İstanbul, Büyükçekmece</span>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}

      {/* details thumb */}
      <div className="showcase-details-thumb-wrap pb-40">
          <div className="container container-1430">
            <div className="row gx-80">
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-thumb mb-80">
                      <Image data-speed=".8" src={details_thumb_1} alt="Studio Gria prodüksiyon çalışmasından mekan çekimi" sizes="(max-width: 991px) 100vw, 50vw" style={{height: "auto"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={details_thumb_2} alt="Studio Gria prodüksiyon çalışmasından ürün ve marka çekimi" sizes="(max-width: 991px) 100vw, 50vw" style={{height: "auto"}}/>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={details_thumb_3} alt="Studio Gria prodüksiyon çalışmasından geniş açı tanıtım karesi" sizes="(max-width: 1430px) 100vw, 1430px" style={{height: "auto"}}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details thumb */}

      {/* details overview */}
      <div className="showcase-details-overview pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-4">
                  <div className="showcase-details-overview-left">
                      <h2 className="showcase-details-subtitle fs-40 tp-char-animation">Misyonumuz</h2>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="showcase-details-overview-right tp_title_anim">
                      <p>Sosyal medyanın işi beğeni toplamak değil, müşteri getirmektir. Bu yüzden her içeriği bir amaca bağlarız: mesaj, rezervasyon, form ya da satış. Çekimi sahada kendimiz yaparız, hazır şablon kullanmayız ve reklam bütçenizin nereye harcandığını her ay rakamla gösteririz. İstanbul&apos;un iki yakasında da sahada çekim yapıyor, Türkiye genelindeki markaların hesaplarını uzaktan yönetiyoruz.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}

      {/* rehberler, bolgeler ve kapanis: blog ve ilce sayfalarina ic link */}
      <AnasayfaRehberler yazilar={yazilar} />
      <AnasayfaBolgeler />
      <AnasayfaKapanis />
    </>
  )
}
