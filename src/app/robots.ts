import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/kurulus-data";

// Yapay zeka arama motorlarinin tarayicilari.
//
// NEDEN ACIKCA YAZILIYOR: "User-agent: *" kurali teknik olarak bu botlari da
// kapsar, ancak bircogu (ozellikle Google-Extended ve Applebot-Extended)
// site sahibinin niyetini acik gormek ister; adi gecmeyen sitenin icerigini
// yapay zeka yanitlarinda kullanmamayi tercih edebilir. Adlarini tek tek
// yazip izin vermek, markanin ChatGPT, Perplexity, Claude ve Google AI
// Ozetleri'nde kaynak olarak gosterilmesinin on kosuludur.
//
// Bir ajans icin bu tamamen kazanctir: yapay zekaya sorulan "Istanbul'da
// sosyal medya ajansi" sorusunda kaynak olarak anilmak, reklamsiz erisimdir.
const yapayZekaTarayicilari = [
  // OpenAI
  "GPTBot", // egitim ve ChatGPT tarama
  "OAI-SearchBot", // ChatGPT arama dizini
  "ChatGPT-User", // kullanicinin tetikledigi anlik ziyaret
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini ve AI Ozetleri icin ayri izin ister)
  "Google-Extended",
  // Apple Intelligence ve Siri
  "Applebot",
  "Applebot-Extended",
  // Microsoft Copilot
  "Bingbot",
  // Meta AI
  "meta-externalagent",
  "FacebookBot",
  // Digerleri
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
  "Bytespider",
  "PetalBot",
  "CCBot",
  "Diffbot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  const yasakliYollar = ["/api/", "/_next/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: yasakliYollar,
      },
      // Her yapay zeka tarayicisina ayni izin acikca verilir.
      ...yapayZekaTarayicilari.map((tarayici) => ({
        userAgent: tarayici,
        allow: "/",
        disallow: yasakliYollar,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
