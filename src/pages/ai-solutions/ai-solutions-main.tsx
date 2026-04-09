"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger } from "@/plugins";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import styles from "./ai-solutions-main.module.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const capabilityPills = [
  "Maliyet verimliliği",
  "48 saatte teslim",
  "Sınırsız yaratıcılık",
  "Ölçeklenebilir üretim",
  "Gerçekçi ışık ve doku",
  "Marka estetiğine sadık",
];

const motionCards = [
  {
    id: 1,
    title: "Street Lifestyle",
    tag: "MatchaKızı",
    description:
      "MatchaKızı için şehir temposunu ürünle buluşturan, moda dili güçlü lifestyle kampanya kareleri üretiyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/matcha-street.jpg",
  },
  {
    id: 2,
    title: "Dining Editorial",
    tag: "Entepe",
    description:
      "Entepe'nin mobilya koleksiyonunu atmosfer, styling ve model kullanımıyla editoryal bir sahneye taşıyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/entepe-dining.jpg",
  },
  {
    id: 3,
    title: "Jewelry Portrait",
    tag: "Lucea",
    description:
      "Lucea için mücevheri model üzerinde premium moda diliyle gösteren güçlü close-up portreler kuruyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/lucea-portrait.jpg",
  },
  {
    id: 4,
    title: "Golden Hour Beauty",
    tag: "Luxera",
    description:
      "Luxera'nın parfüm anlatısını cilt, ışık ve duygu ile birleştiren sıcak golden hour kampanya görselleri hazırlıyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/luxera-goldenhour.jpg",
  },
  {
    id: 5,
    title: "On-the-Go Campaign",
    tag: "MatchaKızı",
    description:
      "Ürünü günlük hayatın içine yerleştiren hızlı, dinamik ve paylaşılabilir kullanım anlarını kampanya diline çeviriyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/matcha-on-the-go.jpg",
  },
  {
    id: 6,
    title: "Material Closeup",
    tag: "Entepe",
    description:
      "Yüzey, kenar bitişi ve materyal kalitesini yakın planlarda premium hissi koruyarak görünür kılıyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/entepe-material.jpg",
  },
  {
    id: 7,
    title: "Necklace Display",
    tag: "Lucea",
    description:
      "Takının formunu, taşını ve malzeme hissini sade ama etkili bir ürün sahnesi içinde öne çıkarıyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/lucea-necklace-display.jpg",
  },
  {
    id: 8,
    title: "Perfume Macro",
    tag: "Luxera",
    description:
      "Şişe, yüzey yansımaları ve damla detaylarını parfümün premium karakterini destekleyecek şekilde işliyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/luxera-macro.jpg",
  },
  {
    id: 9,
    title: "Hero Packshot",
    tag: "MatchaKızı",
    description:
      "Markanın imza ürününü öne çıkaran ana kampanya ve landing page karelerini hızlı ve yüksek kaliteyle üretiyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg",
  },
  {
    id: 10,
    title: "Bedroom Story",
    tag: "Entepe",
    description:
      "Mobilyayı yalnız bırakmıyor, gündelik yaşam hissi veren tam sahnelerle ürünün kullanım bağlamını da kuruyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/entepe-bedroom.jpg",
  },
  {
    id: 11,
    title: "Rings Composition",
    tag: "Lucea",
    description:
      "Birden fazla parçayı aynı görsel dilde bir araya getirerek koleksiyon anlatısını temiz ve sofistike hale getiriyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/lucea-rings-composition.jpg",
  },
  {
    id: 12,
    title: "Coastal Packshot",
    tag: "Luxera",
    description:
      "Parfüm ürününü kıyı, kum ve gün ışığı atmosferiyle bağlayarak hem packshot hem kampanya etkisi taşıyan sahneler tasarlıyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/luxera-dunes.jpg",
  },
];

const insightCards = [
  {
    eyebrow: "Maliyet Verimliliği",
    title:
      "Yüksek stüdyo kiraları ve prodüksiyon lojistiği yerini çok daha akıllı bir bütçe kullanımına bırakıyor.",
    text:
      "Model ajansı, mekan kiralama ve fiziksel çekim masrafları rafa kalkarken bütçenizi doğrudan markanızın büyümesine ayırabiliyorsunuz.",
    image: "/assets/img/ai-solutions/brand-mix/matcha-macro.jpg",
  },
  {
    eyebrow: "Hız ve Esneklik",
    title:
      "Normal şartlarda haftalar sürecek profesyonel görselleştirme projelerini 48 saat gibi kısa sürelerde tamamlıyoruz.",
    text:
      "Klasik çekim takvimine bağlı kalmadan sahneleri, ışığı ve varyasyonları çok daha hızlı üretiyor; revizyonları süreci kilitlemeden yönetiyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/entepe-hand-detail.jpg",
  },
  {
    eyebrow: "Sınırsız Yaratıcılık",
    title:
      "Hayal ettiğiniz her mekanı, her ışığı ve her dokuyu fiziksel sınırlara takılmadan tasarlıyoruz.",
    text:
      "Mücevherin doğal ışıltısından tekstilin dokusuna kadar her detay, dijital sahnede gerçekten daha gerçek görünen karelere dönüşüyor.",
    image: "/assets/img/ai-solutions/brand-mix/lucea-editorial-closeup.jpg",
  },
  {
    eyebrow: "Ölçeklenebilirlik",
    title:
      "Yüzlerce üründe aynı kalite standardını koruyan hızlı ve tutarlı bir görsel kütüphane oluşturuyoruz.",
    text:
      "Koleksiyon büyüdükçe kalite düşmez; marka estetiğine sadık üretim sistemiyle tüm ürün ailelerini aynı dilde görselleştiriyoruz.",
    image: "/assets/img/ai-solutions/brand-mix/luxera-rocks.jpg",
  },
];

const processSteps = [
  {
    index: "01",
    title: "Marka estetiğini okuyoruz",
    text:
      "Sistemimiz yalnızca komut üretmez; markanızın estetik kodlarını, renk ritmini ve görsel tonunu anlayarak her kareye aynı kimliği taşır.",
  },
  {
    index: "02",
    title: "Dokuyu hassasiyetle işliyoruz",
    text:
      "Tekstilin lif hissi, kozmetik yüzey parlaklığı ya da mücevher kesimi gibi ayrıntıları işleyerek yapay hissi görünmez hale getiriyoruz.",
  },
  {
    index: "03",
    title: "Işığı ve sahneyi özgürleştiriyoruz",
    text:
      "Fiziksel sette kurulması zor ya da maliyetli sahneleri dijital olarak inşa ediyor, her ışık koşulunu kontrollü biçimde yeniden üretiyoruz.",
  },
  {
    index: "04",
    title: "Hikayeyi görsele dönüştürüyoruz",
    text:
      "Biz sadece görsel üretmiyoruz; markanızın hikayesini geleceğin teknolojisiyle anlatan, algıya ve satışa çalışan bir anlatı dili kuruyoruz.",
  },
];

const deliverables = [
  "Stüdyo kirası ve lojistik yükü olmadan üretim",
  "48 saat içinde profesyonel görselleştirme",
  "Sınırsız mekan, ışık ve doku varyasyonu",
  "Yüzlerce ürün için tutarlı görsel kütüphanesi",
];

const getArcState = (index: number, total: number) => {
  const progress = total === 1 ? 0.5 : index / (total - 1);
  const angle = -82 + progress * 164;
  const radians = (angle * Math.PI) / 180;
  const left = 50 + Math.sin(radians) * 42;
  const top = 72 - Math.cos(radians) * 26;
  const rotate = angle * 0.72;
  const scale = 0.76 + (1 - Math.abs(progress - 0.5) / 0.5) * 0.22;

  return {
    left: `${left}%`,
    top: `${top}%`,
    rotate,
    scale,
    zIndex: 20 + index,
  };
};

const getCenterOutOrder = (total: number) => {
  const center = (total - 1) / 2;

  return Array.from({ length: total }, (_, index) => index).sort((a, b) => {
    const distanceA = Math.abs(a - center);
    const distanceB = Math.abs(b - center);

    return distanceA - distanceB;
  });
};

const AiSolutionsMain = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const activeCard =
    motionCards.find((card) => card.id === activeCardId) ?? null;
  const activeCardIndex = activeCard
    ? motionCards.findIndex((card) => card.id === activeCard.id) + 1
    : null;

  useScrollSmooth();

  const animateCards = (nextActiveId: number | null, immediate = false) => {
    const cards = cardRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (!cards.length) return;

    gsap.killTweensOf(cards);

    if (nextActiveId === null) {
      const order = getCenterOutOrder(cards.length);
      const timeline = gsap.timeline({
        defaults: {
          duration: immediate ? 0 : 1.05,
          ease: "expo.inOut",
        },
      });

      order.forEach((cardIndex, orderIndex) => {
        const cardEl = cards[cardIndex];
        const arcState = getArcState(cardIndex, cards.length);

        timeline.to(
          cardEl,
          {
            left: arcState.left,
            top: arcState.top,
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            rotate: arcState.rotate,
            scale: arcState.scale,
            opacity: 1,
            zIndex: arcState.zIndex,
          },
          immediate ? 0 : orderIndex * 0.045
        );
      });

      return;
    }

    const activeIndex = motionCards.findIndex((card) => card.id === nextActiveId);
    const total = cards.length;
    const orderedIndices = Array.from({ length: total }, (_, index) => index).sort((a, b) => {
      if (a === activeIndex) return -1;
      if (b === activeIndex) return 1;

      const distanceA = (a - activeIndex + total) % total;
      const distanceB = (b - activeIndex + total) % total;

      return distanceA - distanceB;
    });

    const activeEl = cards[activeIndex];
    const activeArcState = getArcState(activeIndex, total);
    const liftOffset = window.innerWidth < 768 ? -54 : -86;
    const stackBaseLeft = window.innerWidth < 768 ? "44%" : "46%";
    const stackBaseTop = window.innerWidth < 768 ? "52%" : "51%";

    const timeline = gsap.timeline({
      defaults: {
        ease: "expo.inOut",
      },
    });

    timeline.to(activeEl, {
      duration: immediate ? 0 : 0.48,
      left: activeArcState.left,
      top: activeArcState.top,
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: liftOffset,
      rotate: activeArcState.rotate * 0.24,
      scale: activeArcState.scale + 0.14,
      zIndex: 180,
    });

    orderedIndices.forEach((cardIndex, stackIndex) => {
      const cardEl = cards[cardIndex];
      timeline.to(
        cardEl,
        {
          duration: immediate ? 0 : 0.96,
          left: stackBaseLeft,
          top: stackBaseTop,
          xPercent: -50,
          yPercent: -50,
          x: stackIndex * (window.innerWidth < 768 ? 17 : 22),
          y: stackIndex * 1.5,
          rotate: 0,
          scale: Math.max(0.62, 1 - stackIndex * 0.045),
          opacity: stackIndex > 10 ? 0.72 : 1,
          zIndex: 150 - stackIndex,
        },
        immediate ? 0 : 0.34 + stackIndex * 0.032
      );
    });
  };

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLButtonElement[];

      if (cards.length) {
        gsap.set(cards, {
          left: "50%",
          top: "66%",
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 36,
          rotate: 0,
          scale: 0.42,
          opacity: 0,
          zIndex: 10,
        });

        const introTimeline = gsap.timeline({
          defaults: {
            ease: "expo.out",
          },
          delay: 0.12,
        });

        getCenterOutOrder(cards.length).forEach((cardIndex, orderIndex) => {
          const cardEl = cards[cardIndex];
          const arcState = getArcState(cardIndex, cards.length);

          introTimeline.to(
            cardEl,
            {
              duration: 1.15,
              left: arcState.left,
              top: arcState.top,
              xPercent: -50,
              yPercent: -50,
              x: 0,
              y: 0,
              rotate: arcState.rotate,
              scale: arcState.scale,
              opacity: 1,
              zIndex: arcState.zIndex,
            },
            orderIndex * 0.055
          );
        });
      }

      gsap.from(`.${styles.heroStage}`, {
        autoAlpha: 0,
        y: 34,
        duration: 1,
        ease: "expo.out",
      });

      gsap.from(`.${styles.pageHeaderInner} > *`, {
        autoAlpha: 0,
        y: 18,
        duration: 0.78,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from(`.${styles.heroCaption} > *`, {
        autoAlpha: 0,
        y: 20,
        duration: 0.82,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      });

      gsap.utils
        .toArray<HTMLElement>("[data-ai-reveal]")
        .forEach((element, index) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 42,
            duration: 0.8,
            delay: index * 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          });
        });
    },
    { scope: rootRef }
  );

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main ref={rootRef} className={styles.page}>
            <section className={styles.hero}>
              <div className="container container-1480">
                <div
                  className={`${styles.heroStage} ${
                    activeCard ? styles.isDetailVisible : ""
                  }`}
                >
                  <div className={styles.pageHeaderInner}>
                    <span className={styles.pageHeaderEyebrow}>Studio Gria</span>
                    <h1 className={styles.pageHeaderTitle}>AI Destekli Çözümler</h1>
                    <p className={styles.pageHeaderText}>
                      Yapay zeka destekli görsel prodüksiyon altyapımızla
                      markalar için daha hızlı, daha esnek ve daha ölçeklenebilir
                      içerik üretiyoruz.
                    </p>
                  </div>

                  <div
                    className={styles.stageCanvas}
                    onClick={(event) => {
                      if (event.target === event.currentTarget) {
                        setActiveCardId(null);
                        animateCards(null);
                      }
                    }}
                  >
                    <div className={styles.stageHint}>
                      <span>Bu resimler AI ile oluşturuldu.</span>
                      <strong>Nerden mi biliyoruz? Çünkü biz yaptık!</strong>
                    </div>

                    {motionCards.map((card, index) => (
                      <button
                        type="button"
                        key={card.id}
                        ref={(element) => {
                          cardRefs.current[index] = element;
                        }}
                        className={`${styles.stageCard} ${
                          activeCardId === card.id ? styles.isActive : ""
                        }`}
                        onClick={() => {
                          setActiveCardId((current) => {
                            const nextActiveId =
                              current === card.id ? null : card.id;
                            animateCards(nextActiveId);

                            return nextActiveId;
                          });
                        }}
                        aria-pressed={activeCardId === card.id}
                      >
                        <span className={styles.cardIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className={styles.cardMedia}>
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(max-width: 991px) 24vw, 180px"
                          />
                        </div>
                        <span className={styles.cardTag}>{card.tag}</span>
                      </button>
                    ))}
                  </div>

                  {activeCard ? (
                    <aside className={styles.stageInfoPanel}>
                      <div className={styles.activeCardPanel}>
                        <div className={styles.activeCardCopy}>
                          <span>
                            {`${String(activeCardIndex).padStart(2, "0")} / ${
                              activeCard.tag
                            }`}
                          </span>
                          <strong>{activeCard.title}</strong>
                          <p>{activeCard.description}</p>
                        </div>

                        <button
                          type="button"
                          className={styles.resetButton}
                          onClick={() => {
                            setActiveCardId(null);
                            animateCards(null);
                          }}
                        >
                          Sahnelere dön
                        </button>
                      </div>
                    </aside>
                  ) : null}
                </div>

                <div className={styles.heroCaption}>
                  <span className={styles.eyebrow}>AI Destekli Çözümler</span>
                  <h2 className={styles.heroTitle}>
                    Yapay Zeka Destekli Görsel Prodüksiyon: Gelecek, Studio
                    Gria&apos;da Başladı.
                  </h2>
                  <h2 className={styles.heroSubtitle}>
                    Stüdyo Maliyetlerine ve Uzun Prodüksiyon Süreçlerine Veda
                    Edin.
                  </h2>
                  <p className={styles.heroText}>
                    Geleneksel çekim süreçlerinin ne kadar yorucu, maliyetli ve
                    zaman alıcı olduğunu biliyoruz. Model seçimi, ışık kurulumu,
                    mekan kiralama ve bitmek bilmeyen post-prodüksiyon
                    haftaları...
                  </p>
                  <p className={styles.heroText}>
                    Biz Studio Gria olarak, bir süredir mutfağımızda bu
                    kuralları değiştirecek bir sistem pişiriyorduk. Kendi
                    geliştirdiğimiz özel AI görselleştirme sistemimizle,
                    markanızın ruhunu yansıtan kusursuz kareleri dijital dünyada
                    inşa ediyoruz.
                  </p>

                  <div className={styles.heroActions}>
                    <Link href="/contact" className={styles.primaryButton}>
                      Projeyi konuşalım
                    </Link>
                    <a href="#ai-sections" className={styles.secondaryButton}>
                      Avantajları keşfet
                    </a>
                  </div>

                  <div className={styles.pillRow}>
                    {capabilityPills.map((item) => (
                      <span className={styles.pill} key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="ai-sections" className={styles.section}>
              <div className="container container-1480">
                <div className={styles.sectionIntro} data-ai-reveal="true">
                  <span className={styles.eyebrow}>
                    Neden AI Destekli Prodüksiyon?
                  </span>
                  <h2 className={styles.sectionTitle}>
                    Markanız için neden yapay zeka destekli görselleri tercih
                    etmelisiniz?
                  </h2>
                  <p className={styles.sectionLead}>
                    İşte Studio Gria farkıyla sunduğumuz avantajlar.
                  </p>
                </div>

                <div className={styles.insightGrid}>
                  {insightCards.map((item) => (
                    <article
                      className={styles.insightCard}
                      key={item.title}
                      data-ai-reveal="true"
                    >
                      <div className={styles.insightImageWrap}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={960}
                          height={720}
                          className={styles.insightImage}
                        />
                      </div>
                      <div className={styles.insightBody}>
                        <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardText}>{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className="container container-1480">
                <div className={styles.processPanel} data-ai-reveal="true">
                  <div className={styles.sectionIntroCompact}>
                    <span className={styles.eyebrow}>Studio Gria Farkı</span>
                    <h3 className={styles.sectionMinorTitle}>
                      Studio Gria ile &quot;Gerçeküstü&quot; Bir Gerçeklik
                    </h3>
                    <p className={styles.sectionLead}>
                      Yapay zeka denince akla gelen yapay duran görselleri
                      unutun. Bizim sistemimiz, markanızın estetik kodlarını
                      anlayan ve dokuları en ince ayrıntısına kadar işleyen bir
                      yapıya sahip.
                    </p>
                  </div>

                  <div className={styles.processGrid}>
                    {processSteps.map((step) => (
                      <article className={styles.processCard} key={step.index}>
                        <span className={styles.processIndex}>{step.index}</span>
                        <h3 className={styles.processTitle}>{step.title}</h3>
                        <p className={styles.processText}>{step.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className="container container-1480">
                <div className={styles.deliverablesPanel} data-ai-reveal="true">
                  <div className={styles.deliverablesCopy}>
                    <span className={styles.eyebrow}>Özel AI Sistemi</span>
                    <h2 className={styles.sectionTitle}>
                      Tek seferlik içerikler değil, hızlı, tutarlı ve
                      ölçeklenebilir bir görsel üretim altyapısı kuruyoruz.
                    </h2>
                    <p className={styles.sectionLead}>
                      Biz sadece görsel üretmiyoruz; markanızın hikayesini
                      geleceğin teknolojisiyle anlatan sürdürülebilir bir üretim
                      sistemi tasarlıyoruz.
                    </p>
                  </div>

                  <div className={styles.deliverablesList}>
                    {deliverables.map((item) => (
                      <div className={styles.deliverableItem} key={item}>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className="container container-1480">
                <div className={styles.ctaPanel} data-ai-reveal="true">
                  <span className={styles.eyebrow}>Bir Sonraki Adım</span>
                  <h2 className={styles.ctaTitle}>
                    Yeni koleksiyonunuzu fiziksel sınırlar olmadan birlikte
                    kurgulayalım.
                  </h2>
                  <p className={styles.ctaText}>
                    İster tek bir kampanya karesiyle ister geniş bir ürün
                    ailesiyle başlayalım. Hedefimiz aynı: daha hızlı, daha
                    akıllı ve daha etkileyici bir görsel prodüksiyon sistemi
                    kurmak.
                  </p>
                  <div className={styles.heroActions}>
                    <Link href="/contact" className={styles.primaryButton}>
                      İletişime geç
                    </Link>
                    <Link
                      href="/portfolio-standard"
                      className={styles.secondaryButton}
                    >
                      Portfolyoyu incele
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterTwo topCls="" whiteFooter={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default AiSolutionsMain;
