import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import TeklifForm from "@/app/teklif/teklif-form";
import MusteriSozleri from "@/components/musteri-sozleri";
import OynatKart from "@/components/oynat-kart";
import ModelBag from "@/components/model-bag";
import {
  sektorler,
  sektorBul,
  type Sektor,
  type SektorGaleriKaresi,
  type SektorGorselSatiri,
  type SektorKurali,
} from "@/data/sektor-data";
import { yayindakiVakalar } from "@/data/vaka-data";
import { musteriSozleri, musteriSozuBul, musteriVideoSemalari, VIDEO_YOLU } from "@/data/musteri-sozleri-data";
import { hizmetBul } from "@/data/hizmet-data";
import { blogYazilari } from "@/data/blog-yazilari";
import { calismaModelleri } from "@/data/model-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import s from "../sektor.module.scss";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return sektorler.map((sektor) => ({ slug: sektor.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sektor = sektorBul(params.slug);
  if (!sektor) return {};
  const url = `/sektorler/${sektor.slug}`;
  return {
    title: sektor.seoBaslik,
    description: sektor.seoAciklama,
    alternates: { canonical: url },
    openGraph: { type: "website", title: sektor.seoBaslik, description: sektor.seoAciklama, url },
    twitter: { card: "summary_large_image", title: sektor.seoBaslik, description: sektor.seoAciklama },
  };
}

const WHATSAPP_NUMARA = "905388654405";
const VIDEO_SEKTOR = "/assets/video/sektor";

// Veri dosyasindaki *...* isaretli parca italik vurgu olur
function vurgula(metin: string) {
  return metin.split("*").map((parca, sira) =>
    sira % 2 === 1 ? <em key={sira}>{parca}</em> : <React.Fragment key={sira}>{parca}</React.Fragment>,
  );
}

function WhatsappIkon() {
  return (
    <svg className={s.ikon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Acilis gorseli: sektorun en guclu kaniti ilk ekranda durur
function Acilis({ sektor }: { sektor: Sektor }) {
  const acilis = sektor.acilis;

  if (acilis.tur === "musteri-video") {
    const soz = musteriSozuBul(acilis.kimlik);
    if (!soz) return null;
    return (
      <figure className={s.acilisVideo}>
        <OynatKart
          dosya={`${VIDEO_YOLU}/${soz.kimlik}-musteri-yorumu`}
          alt={`${soz.marka} adına ${soz.ad}, Studio Gria hakkında konuşurken`}
          etiket={`${soz.marka} müşteri yorumu`}
          sureSaniye={soz.sureSaniye}
          oncelikli
          sizes="(max-width: 991px) 80vw, 380px"
        />
        <figcaption className={s.acilisNot}>
          <span className={s.acilisAlinti}>&ldquo;{soz.alinti}&rdquo;</span>
          <span>
            {soz.ad}
            {soz.rol ? `, ${soz.rol}` : ""} · {soz.marka}
          </span>
        </figcaption>
      </figure>
    );
  }

  if (acilis.tur === "video") {
    return (
      <figure className={s.acilisVideo}>
        <OynatKart
          dosya={`${VIDEO_SEKTOR}/${acilis.video.dosya}`}
          alt={acilis.video.aciklama}
          etiket={acilis.video.ad}
          sureSaniye={acilis.video.sureSaniye}
          oncelikli
          sizes="(max-width: 991px) 80vw, 380px"
        />
        <figcaption className={s.acilisNot}>
          <span>{acilis.video.aciklama}.</span>
        </figcaption>
      </figure>
    );
  }

  if (acilis.tur === "once-sonra") {
    const satir = acilis.satir;
    return (
      <figure className={s.acilisOnceSonra}>
        <div className={s.acilisKareler}>
          {satir.kareler.map((kare, sira) => (
            <div className={`${s.acilisKare} ${sira === 0 ? s.acilisKareBuyuk : ""}`} key={kare.src}>
              <Image
                className={s.gorsel}
                src={kare.src}
                alt={kare.alt}
                fill
                priority
                sizes="(max-width: 991px) 50vw, 300px"
              />
            </div>
          ))}
        </div>
        <div className={s.acilisOnce}>
          <div className={s.acilisOnceKare}>
            <Image className={s.gorsel} src={satir.once.src} alt={satir.once.alt} fill sizes="160px" />
          </div>
          <span className={s.acilisOnceEtiket}>{satir.once.etiket}</span>
        </div>
        <figcaption className={s.acilisNot}>
          <span>
            Küçük kare {satir.marka}&apos;nın gönderdiği telefon fotoğrafı; diğerleri aynı ürün ({satir.urun})
            için ürettiğimiz kareler.
          </span>
        </figcaption>
      </figure>
    );
  }

  // Tek gorsel: katalog sayfasi ya da (klinikte) temsili gorsel
  return (
    <figure className={s.acilisTek}>
      <div className={s.acilisTekKare}>
        <Image
          className={s.gorsel}
          src={acilis.src}
          alt={acilis.alt}
          fill
          priority
          sizes="(max-width: 991px) 92vw, 46vw"
        />
      </div>
      <figcaption className={s.acilisNot}>
        <span>{acilis.not}</span>
      </figcaption>
    </figure>
  );
}

// Mevzuat ozeti: sol sutun izin verilen ya da zorunlu olan, sag sutun yasak
function KuralKarti({ kural }: { kural: SektorKurali }) {
  return (
    <div className={s.mevzuat}>
      <p className={s.mevzuatBaslik}>{kural.baslik}</p>
      <div className={s.mevzuatIzgara}>
        <div>
          <p className={s.mevzuatEtiket}>{kural.serbestEtiket ?? "Yapılabilir"}</p>
          <ul className={s.mevzuatListe}>
            {kural.serbest.map((madde) => (
              <li key={madde}>{madde}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className={`${s.mevzuatEtiket} ${s.mevzuatYasak}`}>{kural.yasakEtiket ?? "Yapılamaz"}</p>
          <ul className={`${s.mevzuatListe} ${s.mevzuatListeYasak}`}>
            {kural.yasak.map((madde) => (
              <li key={madde}>{madde}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={s.mevzuatKaynak}>{kural.kaynak}</p>
    </div>
  );
}

// Yatay kare iki, dikey kare uc sutun kaplar; veri sirasi satirlari doldurur.
// Telefonda dikeyler ikili satira dizilir; tek sayida dikey dizisinin sonuncusu
// yalniz kalmasin diye telefonda tam satir ve yatay kesimle gosterilir.
function Galeri({ kareler }: { kareler: SektorGaleriKaresi[] }) {
  const tekKalan = new Set<number>();
  let dizi = 0;
  kareler.forEach((kare, sira) => {
    dizi = kare.oran === "dikey" ? dizi + 1 : 0;
    const sonraki = kareler[sira + 1];
    if (dizi > 0 && (!sonraki || sonraki.oran !== "dikey") && dizi % 2 === 1) tekKalan.add(sira);
  });
  return (
    <div className={s.galeri}>
      {kareler.map((kare, sira) => (
        <figure
          className={`${s.galeriKare} ${kare.oran === "yatay" ? s.galeriYatay : s.galeriDikey} ${
            tekKalan.has(sira) ? s.galeriTekMobil : ""
          }`}
          key={kare.src}
        >
          <div className={s.galeriCerceve}>
            <Image
              className={s.gorsel}
              src={kare.src}
              alt={kare.alt}
              fill
              sizes={kare.oran === "yatay" ? "(max-width: 767px) 92vw, 560px" : "(max-width: 767px) 46vw, 370px"}
            />
          </div>
          <figcaption className={s.galeriEtiket}>{kare.etiket}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function GorselSatiri({ satir }: { satir: SektorGorselSatiri }) {
  return (
    <article className={s.satir}>
      <div className={s.satirMetin}>
        <p className={s.satirMarka}>{satir.marka}</p>
        <h3 className={s.satirUrun}>{satir.urun}</h3>
      </div>
      <figure className={s.satirOnce}>
        <div className={s.satirOnceKare}>
          <Image className={s.gorsel} src={satir.once.src} alt={satir.once.alt} fill sizes="(max-width: 767px) 40vw, 200px" />
        </div>
        <figcaption className={s.satirEtiket}>{satir.once.etiket}</figcaption>
      </figure>
      {satir.kareler.map((kare) => (
        <figure className={s.satirKare} key={kare.src}>
          <Image className={s.gorsel} src={kare.src} alt={kare.alt} fill sizes="(max-width: 767px) 46vw, 400px" />
        </figure>
      ))}
    </article>
  );
}

export default function SektorSayfasi({ params }: Props) {
  const sektor = sektorBul(params.slug);
  if (!sektor) notFound();

  const adres = `${SITE_URL}/sektorler/${sektor.slug}`;
  const whatsapp = `https://wa.me/${WHATSAPP_NUMARA}?text=${encodeURIComponent(sektor.whatsappMesaj)}`;
  const model = calismaModelleri.find((m) => m.anahtar === sektor.model.anahtar);
  const yazilar = sektor.ilgiliYazilar
    .map((slug) => blogYazilari.find((y) => y.slug === slug))
    .filter((y): y is NonNullable<typeof y> => Boolean(y));
  const digerSektorler = sektorler.filter((d) => d.slug !== sektor.slug);
  const vakalar = (sektor.vakalar ?? [])
    .map((slug) => yayindakiVakalar().find((v) => v.slug === slug))
    .filter((v): v is NonNullable<typeof v> => Boolean(v));

  // Acilista gosterilen musteri videosu asagidaki bolumde tekrar edilmez
  const acilisMusteri = sektor.acilis.tur === "musteri-video" ? sektor.acilis.kimlik : undefined;
  const digerSozler = musteriSozleri.map((m) => m.kimlik).filter((k) => k !== acilisMusteri);

  const videoSemalari = [
    ...(acilisMusteri ? musteriVideoSemalari([acilisMusteri]) : []),
    ...musteriVideoSemalari(digerSozler),
    ...[...(sektor.acilis.tur === "video" ? [sektor.acilis.video] : []), ...(sektor.videolar ?? [])]
      .filter((v, sira, liste) => liste.findIndex((x) => x.dosya === v.dosya) === sira)
      .map((v) => ({
        "@type": "VideoObject",
        "@id": `${SITE_URL}${VIDEO_SEKTOR}/${v.dosya}.mp4#video`,
        name: v.ad,
        description: v.aciklama,
        thumbnailUrl: `${SITE_URL}${VIDEO_SEKTOR}/${v.dosya}.jpg`,
        contentUrl: `${SITE_URL}${VIDEO_SEKTOR}/${v.dosya}.mp4`,
        uploadDate: v.yuklenme ?? "2026-10-17",
        duration: `PT${v.sureSaniye}S`,
        inLanguage: "tr-TR",
      })),
  ];

  const sayfaSemasi = grafSemasi([
    {
      "@type": "Service",
      "@id": `${adres}#hizmet`,
      name: sektor.rozet,
      serviceType: "Sosyal medya yönetimi",
      description: sektor.seoAciklama,
      url: adres,
      provider: { "@id": KIMLIK.kurulus },
      areaServed: { "@type": "Country", name: "Türkiye" },
      audience: { "@type": "BusinessAudience", audienceType: sektor.ad },
    },
    {
      "@type": "WebPage",
      "@id": `${adres}#sayfa`,
      url: adres,
      name: sektor.seoBaslik,
      description: sektor.seoAciklama,
      inLanguage: "tr-TR",
      isPartOf: { "@id": KIMLIK.website },
      about: { "@id": `${adres}#hizmet` },
      dateModified: "2026-10-18",
    },
    sssSemasi(sektor.sorular, `/sektorler/${sektor.slug}`),
    kirintiSemasi([
      { ad: "Ana sayfa", yol: "/" },
      { ad: "Sektörler", yol: "/sektorler" },
      { ad: sektor.ad, yol: `/sektorler/${sektor.slug}` },
    ]),
    ...videoSemalari,
  ]);

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={s.sayfa}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sayfaSemasi }} />

        <section className={s.hero}>
          <div className={s.kapsayici}>
            <nav className={s.kirinti} aria-label="Sayfa yolu">
              <Link href="/sektorler">Sektörler</Link>
              <span aria-hidden="true">/</span>
              <span>{sektor.ad}</span>
            </nav>
            <div className={s.heroIzgara}>
              <div className={s.heroMetin}>
                <h1 className={s.baslik}>
                  <span className={`${s.rozet} sg-gir sg-gir-1`}>{sektor.rozet}</span>
                  <span className={`${s.slogan} sg-gir sg-gir-2`}>{vurgula(sektor.slogan)}</span>
                </h1>
                <p className={`${s.spot} sg-gir sg-gir-3`}>{sektor.spot}</p>
                <div className={`${s.eylemler} sg-gir sg-gir-4`}>
                  <a className={s.anaDugme} href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsappIkon />
                    WhatsApp&apos;tan yazın
                  </a>
                  <a className={s.ikinciBag} href="#teklif-formu">
                    Teklif formu
                  </a>
                </div>
                <dl className={`${s.kunye} sg-gir sg-gir-5`}>
                  {sektor.kunye.map((k) => (
                    <div key={k.deger}>
                      <dt className={s.kunyeDeger}>{k.deger}</dt>
                      <dd className={s.kunyeEtiket}>{k.etiket}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className={`${s.heroGorsel} sg-gir sg-gir-3`}>
                <Acilis sektor={sektor} />
              </div>
            </div>
          </div>
        </section>

        <section className={s.bolum}>
          <div className={s.kapsayici}>
            <h2 className={s.bolumBaslik}>{vurgula(sektor.nedenBaslik)}</h2>
            <ol className={s.nedenler}>
              {sektor.nedenler.map((neden, sira) => (
                <li className={s.neden} key={neden.baslik}>
                  <span className={s.nedenNo}>{String(sira + 1).padStart(2, "0")}</span>
                  <h3 className={s.nedenBaslik}>{neden.baslik}</h3>
                  <p className={s.nedenMetin}>{neden.metin}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${s.bolum} ${s.bolumKrem}`}>
          <div className={s.kapsayici}>
            <span className={s.bolumRozet}>{sektor.kanitRozet}</span>
            <h2 className={s.bolumBaslik}>{vurgula(sektor.kanitBaslik)}</h2>
            <p className={s.bolumSpot}>{sektor.kanitSpot}</p>

            {sektor.videolar && (
              <div className={s.videolar}>
                {sektor.videolar.map((video) => (
                  <figure className={s.videoKart} key={video.dosya}>
                    <OynatKart
                      dosya={`${VIDEO_SEKTOR}/${video.dosya}`}
                      alt={video.aciklama}
                      etiket={video.ad}
                      sureSaniye={video.sureSaniye}
                    />
                    <figcaption className={s.videoAd}>
                      <strong>{video.ad}</strong>
                      <span>{video.aciklama}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {sektor.gorselSatirlari && (
              <div className={s.satirlar}>
                {sektor.gorselSatirlari.map((satir) => (
                  <GorselSatiri satir={satir} key={satir.urun} />
                ))}
                <Link className={s.bag} href="/ai-urun-gorseli">
                  Tüm ürün görseli örnekleri
                </Link>
              </div>
            )}

            {vakalar.length > 0 && (
              <ul className={s.vakalar}>
                {vakalar.map((vaka) => (
                  <li className={s.vaka} key={vaka.slug}>
                    <Link className={s.vakaBag} href={`/referanslar/${vaka.slug}`}>
                      <span className={s.vakaUst}>
                        {vaka.marka} · {vaka.donem}
                      </span>
                      <dl className={s.vakaRakamlar}>
                        {vaka.rakamlar.slice(0, 3).map((r) => (
                          <div key={r.etiket}>
                            <dt>{r.deger}</dt>
                            <dd>{r.etiket}</dd>
                          </div>
                        ))}
                      </dl>
                      <span className={s.vakaOk}>Vakayı okuyun</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {sektor.galeri && <Galeri kareler={sektor.galeri} />}

            {sektor.kural && <KuralKarti kural={sektor.kural} />}

            {sektor.adimlar && (
              <ol className={s.adimlar}>
                {sektor.adimlar.map((adim, sira) => (
                  <li className={s.adim} key={adim.baslik}>
                    <span className={s.adimNo}>{String(sira + 1).padStart(2, "0")}</span>
                    <h3 className={s.adimBaslik}>{adim.baslik}</h3>
                    <p className={s.adimMetin}>{adim.metin}</p>
                  </li>
                ))}
              </ol>
            )}

            {sektor.musteriSozu && (() => {
              const soz = musteriSozuBul(sektor.musteriSozu);
              return soz ? (
                <blockquote className={s.buyukAlinti}>
                  <p>&ldquo;{soz.alinti}&rdquo;</p>
                  <footer>
                    {soz.ad}
                    {soz.rol ? `, ${soz.rol}` : ""} · {soz.marka}
                  </footer>
                </blockquote>
              ) : null;
            })()}

            <div className={s.referanslar}>
              <p className={s.referansBaslik}>Bu alanda çalıştığımız markalar</p>
              <ul className={s.referansListe}>
                {sektor.referanslar.map((ad) => (
                  <li key={ad}>{ad}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={s.bolum}>
          <div className={s.kapsayici}>
            <h2 className={s.bolumBaslik}>
              {sektor.ad} için <em>neler yapıyoruz</em>
            </h2>
            <ul className={s.yapilanlar}>
              {sektor.yapilanlar.map((oge) => {
                const hizmet = oge.hizmetSlug ? hizmetBul(oge.hizmetSlug) : undefined;
                const hedef = oge.bag ?? (hizmet ? `/hizmetler/${hizmet.slug}` : undefined);
                return (
                  <li className={s.yapilan} key={oge.baslik}>
                    <h3 className={s.yapilanBaslik}>{oge.baslik}</h3>
                    <p className={s.yapilanMetin}>{oge.metin}</p>
                    {hedef && (
                      <Link className={s.bag} href={hedef}>
                        {hizmet && !oge.bag ? hizmet.ad : "Ayrıntı"}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {model && (
              <div className={s.model}>
                <div>
                  <p className={s.modelEtiket}>Önerdiğimiz çalışma modeli</p>
                  <p className={s.modelAd}>{model.ad}</p>
                </div>
                <p className={s.modelNeden}>{sektor.model.neden}</p>
                <ModelBag className={s.bag} model={sektor.model.anahtar}>
                  Bu modelle teklif alın
                </ModelBag>
              </div>
            )}
          </div>
        </section>

        <MusteriSozleri
          kimlikler={digerSozler}
          rozet="Müşterilerimiz anlatıyor"
          baslik={
            acilisMusteri ? (
              <>
                Başka sektörlerden de <em>aynı cümle</em>
              </>
            ) : undefined
          }
          kimlik="sektor-musteri-sozleri"
        />

        <section className={s.bolum}>
          <div className={s.kapsayici}>
            <h2 className={s.bolumBaslik}>
              Sık sorulan <em>sorular</em>
            </h2>
            <div className={s.sorular}>
              {sektor.sorular.map((kayit, sira) => (
                <details className={s.soru} key={kayit.soru} open={sira === 0}>
                  <summary className={s.soruBaslik}>{kayit.soru}</summary>
                  <p className={s.soruCevap}>{kayit.cevap}</p>
                </details>
              ))}
            </div>
            {sektor.dipNot && <p className={s.dipNot}>{sektor.dipNot}</p>}
          </div>
        </section>

        <section className={`${s.bolum} ${s.bolumKrem}`}>
          <div className={s.kapsayici}>
            <div className={s.formIzgara}>
              <div className={s.formMetin}>
                <span className={s.bolumRozet}>Teklif</span>
                <h2 className={s.bolumBaslik}>
                  İşletmenize özel <em>teklif sunumu</em>
                </h2>
                <p className={s.bolumSpot}>
                  Formu doldurun ya da WhatsApp&apos;tan yazın. İşletmenizi dinleyip size uygun
                  modeli ve fiyatı içeren bir sunum hazırlıyoruz; görüşme için taahhüt gerekmez.
                </p>
                <a className={s.anaDugme} href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsappIkon />
                  WhatsApp&apos;tan yazın
                </a>
              </div>
              <div id="teklif-formu" className={s.formKutu}>
                <TeklifForm
                  kaynak={`Sektör sayfası: ${sektor.ad}`}
                  baslik="Teklif formu"
                  spot="Aynı gün içinde dönüş yapıyoruz."
                  yapiskan={false}
                  sektorOnDeger={sektor.formSektor}
                  whatsappMesaj={sektor.whatsappMesaj}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={s.bolum}>
          <div className={s.kapsayici}>
            <div className={s.digerIzgara}>
              <div>
                <p className={s.digerBaslik}>Diğer sektörler</p>
                <ul className={s.digerListe}>
                  {digerSektorler.map((d) => (
                    <li key={d.slug}>
                      <Link href={`/sektorler/${d.slug}`}>{d.ad}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/referanslar">Tüm referanslar</Link>
                  </li>
                </ul>
              </div>
              {yazilar.length > 0 && (
                <div>
                  <p className={s.digerBaslik}>İlgili rehberler</p>
                  <ul className={s.digerListe}>
                    {yazilar.map((y) => (
                      <li key={y.slug}>
                        <Link href={`/blog/${y.slug}`}>{y.baslik}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
