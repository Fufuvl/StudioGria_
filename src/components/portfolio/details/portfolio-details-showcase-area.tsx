import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import details_thumb_1 from '@/assets/img/inner-project/showcase/15.jpg';
import details_thumb_2 from '@/assets/img/inner-project/showcase/16.jpg';
import details_thumb_3 from '@/assets/img/inner-project/showcase/3.jpg';
import social_data from '@/data/social-data';

export default function PortfolioDetailsShowcaseArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
     {/* details area */}
      <div className="tp-showcase-details-area">
         <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{backgroundImage: "url(/assets/img/inner-project/showcase/background.jpg)"}}>
          <div className="tp-showcase-details-scroll smooth">
              <a onClick={scrollTo} className="pointer">
                <i className="fa-sharp fa-light fa-angle-down"></i>
                
Gezinmek için kaydırın veya sürükleyin
              </a>
          </div>
          <div className="port-showcase-slider-social tp-hover-btn-wrapper">
              {social_data.map((s) => (
                <a key={s.id} className="tp-hover-btn-item tp-hover-btn" href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <i className={s.icon}></i>
                </a>
              ))}
          </div>
          <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="tp-showcase-details-content text-center">
                      <span className="port-showcase-slider-subtitle tp_title_anim">
                        [ Dijital Medya Ajansı ]
                      </span>
                      <h4 className="port-showcase-slider-title tp-char-animation">Studio Gria </h4>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
          <div className="container">
            <div className="row">
                <div className="col-xl-4">
                  <div className="showcase-details-overview-left">
                      <span className="showcase-details-subtitle">Hakkımızda</span>
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
                      <span className="showcase-details-subtitle fs-40 tp-char-animation">Misyonumuz</span>
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
