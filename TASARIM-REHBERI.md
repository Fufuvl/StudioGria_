# Studio Gria Tasarım Rehberi

Bu dosya sitenin tasarım anayasasıdır. Siteye dokunan herkes (insan ya da yapay zeka)
önce bunu okur. Bir karar bu dosyayla çelişiyorsa karar yanlıştır, dosya değil.

## Kimlik

Studio Gria premium bir dijital medya stüdyosudur. Site bir portföy süsü değil,
müşteri kazanım aracıdır. Her sayfa tek bir işe hizmet eder: ziyaretçiyi teklif
formuna götürmek. Estetik bu amaca hizmet ettiği kadar değerlidir.

Ton: sakin özgüven. Bağırmayız, kanıt gösteririz. "En iyiyiz" demeyiz,
"39 marka, 16 milyon görüntülenme" deriz.

## Renk: tek mürekkep kuralı

- Mürekkep: `#16181d`. Metin, ikon, çizgi, dolgu; hepsi bu.
- Zeminler: `#faf9f7` (kırık beyaz) ve `#fff`. Koyu bölümler mürekkep dolgusu.
- Gri tonları serbesttir: `#6b6b6b` (soluk metin), `rgba(22,24,29,0.07-0.25)` (çizgiler).
- Hover koyulaşması: `#2c2f36`. Renk değil ton.
- BAŞKA RENK YOK. Bronz yok, lacivert yok, degrade yok. Tek istisna:
  WhatsApp butonunun yeşili (evrensel tanınırlık) ve fotoğrafların kendi renkleri.
- Vurgu gerekiyorsa *italic* kullanılır, renk asla.

## Tipografi

- Fontlar mevcut değişkenlerden gelir: `--tp-ff-heading`, `--tp-ff-body`. Yeni font eklenmez.
- Başlıklar `clamp()` ile akışkan: örn. `clamp(34px, 5vw, 60px)`.
- Küçük etiketler (rozet): 12px, `letter-spacing: 0.18em`, uppercase, soluk renk.
- Em dash (—) hiçbir metinde kullanılmaz. En dash yalnızca sayı aralığında.

## Görsel kullanımı

- Fotoğraf yalnızca kendi işimizden: çekimlerimiz ve AI üretimlerimiz. Stok görsel yok.
- Fotoğraflar büyük ve tek başına kullanılır (hero, detay sayfası, galeri).
  Küçük kartlarda fotoğraf KULLANILMAZ; orada çizgisel ikon durur
  (`src/components/hizmet-ikonlari.tsx`, stroke 1.5, currentColor).
- Emoji kullanılmaz: platformlara göre farklı ve renkli render olur, tek mürekkep
  kuralını bozar. Emoji ihtiyacı hissediliyorsa doğru cevap çizgisel ikondur.
- Yazı fotoğrafın üstüne bindirilmez. Metin kendi zemininde durur (split düzen).
  İstisna: galeri hover etiketleri (alt kenarda degrade şerit üzerinde).

## Hareket

- Giriş animasyonu: `sgFadeUp` + `.sg-gir .sg-gir-1..5` kademeli gecikme. CSS ile.
- Sayaçlar: görünüme girince sayar (`src/components/sayac.tsx`).
- Marquee: marka şeridi (`src/components/referans-serit.tsx`), hover'da durur.
- Hover dili: ton koyulaşması, hafif translateY(-2px), italic'e kayma,
  negatife dönme (referans satırları). Süreler 0.25-0.35s.
- GSAP ScrollSmoother ve scroll'a bağlı opacity animasyonları YENİ sayfalarda
  kullanılmaz: içerik animasyonsuz da okunur durumda olmalıdır.

## Yerleşim

- Konteyner: max-width 1240px, yatay padding 24px.
- Bölüm ritmi: 66-80px dikey padding; bölümler ince çizgiyle (`--cizgi`) ayrılır.
- Her sayfa aynı iskeleti izler: hero (rozet + H1 + spot) → içerik →
  sosyal kanıt / şerit → koyu kapanış CTA. Kapanış her sayfada aynıdır:
  mürekkep zemin, beyaz başlık, tek beyaz düğme ("Teklif İste").
- Mobil: tek kolon, yatay taşma yasak, dokunma hedefleri en az 44px.
  Menü offcanvas'ta yalnızca menü + iletişim + sosyal; süs yok.

## Dil ve dönüşüm

- Her sayfada tek ana eylem: Teklif Al. Header'da buton, kapanışta düğme.
- Süreç her yerde aynı üç adım (`src/data/surec-data.ts`): dinliyoruz →
  teklif sunumu → onayla üretim. Teklif öncesi analiz/rakip incelemesi VAAT EDİLMEZ.
- Sosyal kanıt rakamları tek kaynaktan (`src/data/sosyal-kanit-data.ts`). Uydurma rakam yazılmaz.
- Kredi kartıyla ödeme vurgusu: teklif formu notu + hizmet sayfaları ödeme kutusu.
- "Yorum ve mesaj yönetimi" hizmet olarak yazılmaz (sunulmuyor).

## Veri dosyaları (içerik buradan yönetilir)

| Dosya | İçerik |
|---|---|
| `src/data/hizmet-data.ts` | 10 hizmet: metin, ikon, SSS, SEO alanları |
| `src/data/referans-data.ts` | 39 marka + sektör kümeleri |
| `src/data/sosyal-kanit-data.ts` | Kanıt metrikleri |
| `src/data/surec-data.ts` | Üç adımlı süreç |
| `src/data/menu-data.ts` | Masaüstü ve mobil menü |
