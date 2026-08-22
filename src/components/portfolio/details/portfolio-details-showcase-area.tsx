import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import details_thumb_1 from '@/assets/img/inner-project/showcase/15.jpg';
import details_thumb_2 from '@/assets/img/inner-project/showcase/16.jpg';
import details_thumb_3 from '@/assets/img/inner-project/showcase/3.jpg';
import social_data from '@/data/social-data';
import AnasayfaHizmetler from '@/components/anasayfa-hizmetler';

export default function PortfolioDetailsShowcaseArea() {
  return (
    <>
     {/* hero: solda metin kolonu, sagda gorsel; yazi gorselin ustunde durmaz */}
      <div className="sg-split-hero">
        <div className="sg-split-metin">
          <span className="sg-split-rozet sg-gir sg-gir-1">
            İstanbul Merkezli Dijital Medya Stüdyosu
          </span>
          <h1 className="sg-split-baslik sg-gir sg-gir-2">
            İyi içerik izlenir.
            <br />
            Doğru içerik <em>satar.</em>
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
        <div
          className="sg-split-gorsel"
          role="img"
          aria-label="The Oba Hotel için havadan çekilmiş tanıtım karesi"
          style={{ backgroundImage: "url(/assets/img/inner-project/showcase/background.jpg)" }}
        />
      </div>
      {/* hero */}

      {/* hizmetler: ana sayfadan detay sayfalarina ic link */}
      <AnasayfaHizmetler />
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
                      <p className="tp_title_anim">İstanbul merkezli bir sosyal medya ajansı olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Çeşitli projelerimizle, markalarınızın dijital dünyasında güçlü bir yere sahip olmanızı sağlıyoruz.</p>
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
                      <Image data-speed=".8" src={details_thumb_1} alt="details-thumb" style={{height: "auto"}}/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={details_thumb_2} alt="details-thumb" style={{height: "auto"}}/>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={details_thumb_3} alt="details-thumb" style={{height: "auto"}}/>
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
                      <p>Studio Gria olarak, yalnızca dikkat çeken değil, aynı zamanda markalar ile hedef kitleleri arasında anlamlı bağlar kuran bir dijital varlık oluşturmakla görevlendirildik. Hızla değişen dijital dünyada; yenilikçi, etkileyici ve sonuç odaklı çözümler tasarlamamız gerekiyordu. Zorluk, her bir müşterimizin benzersiz sesine sadık kalırken tüm platformlarda öne çıkan deneyimler yaratmaktı. Misyonumuz: cesur fikirleri, büyümeyi destekleyen ve sadakat ilhamı veren etkili dijital yolculuklara dönüştürmek.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
      {/* details overview */}
    </>
  )
}
