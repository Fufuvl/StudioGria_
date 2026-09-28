import { ImageResponse } from "next/og";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Paylasim karti (Open Graph) ureticisi. WhatsApp, LinkedIn, X ve Facebook
// link onizlemesinde gorunen 1200x630 gorsel her sayfa icin buradan uretilir.
// Sayfalar kendi klasorlerindeki opengraph-image.tsx ile bu fonksiyonu cagirir;
// yeni blog yazisi, bolge ya da hizmet eklendiginde karti kendiliginden olusur.
//
// Tasarim kurali: yalnizca siyah murekkep (#16181d), beyaz ve gri tonlari.
// Font Syne; Turkce karakterler (ş, ğ, İ) icin tam glif setli WOFF dosyalari
// src/utils/og-fontlar altindadir.

export const OG_BOYUT = { width: 1200, height: 630 };
// PNG fotografli kartta ~670 KB tutuyordu; WhatsApp buyuk gorselde onizlemeyi
// dusurebildigi icin kart JPEG'e cevrilir (~80-120 KB).
export const OG_TUR = "image/jpeg";

const VARSAYILAN_GORSEL = "/assets/img/inner-project/showcase/background.jpg";

async function font(agirlik: 400 | 600 | 700) {
  return readFile(join(process.cwd(), "src/utils/og-fontlar", `Syne-${agirlik}.woff`));
}

async function gorselVerisi(yol: string) {
  const dosya = await readFile(join(process.cwd(), "public", yol));
  const tur = yol.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${tur};base64,${dosya.toString("base64")}`;
}

function baslikBoyutu(baslik: string) {
  if (baslik.length > 70) return 44;
  if (baslik.length > 48) return 52;
  return 62;
}

export async function ogKart({
  ust,
  baslik,
  gorsel = VARSAYILAN_GORSEL,
}: {
  ust: string;
  baslik: string;
  gorsel?: string;
}) {
  const [f400, f600, f700, foto] = await Promise.all([
    font(400),
    font(600),
    font(700),
    gorselVerisi(gorsel),
  ]);

  const png = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#faf9f7" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            height: "100%",
            padding: "60px 56px 56px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 26, color: "#16181d", letterSpacing: 1 }}>
              studio gria
            </div>
            {/* Buyuk harf Turkce kuralla yapilir (satori'nin textTransform'u i -> I yapar) */}
            <div style={{ fontFamily: "Syne", fontWeight: 600, fontSize: 17, color: "#5f6063", marginTop: 34, letterSpacing: 2.5 }}>
              {ust.toLocaleUpperCase("tr-TR")}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: baslikBoyutu(baslik),
              lineHeight: 1.08,
              color: "#16181d",
              letterSpacing: -1,
            }}
          >
            {baslik}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Syne", fontWeight: 400, fontSize: 20, color: "#5f6063" }}>
            <span>studiogria.com</span>
            <span>İstanbul · Büyükçekmece</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={foto} width={480} height={630} style={{ width: 480, height: 630, objectFit: "cover" }} alt="" />
      </div>
    ),
    {
      ...OG_BOYUT,
      fonts: [
        { name: "Syne", data: f400, weight: 400, style: "normal" },
        { name: "Syne", data: f600, weight: 600, style: "normal" },
        { name: "Syne", data: f700, weight: 700, style: "normal" },
      ],
    },
  );
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  return new Response(jpeg, {
    headers: { "Content-Type": OG_TUR, "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
