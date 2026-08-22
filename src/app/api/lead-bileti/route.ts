import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { biletUret } from "../lead/bilet";
import { originGecerliMi } from "../lead/spam-filtresi";

export const runtime = "nodejs";
// Bilet her istekte yeniden uretilmelidir, onbellege alinamaz
export const dynamic = "force-dynamic";

// Form sayfasi acildiginda cagrilir ve imzali bir bilet dondurur.
// Bilet, formun gercekten sitede acildigini ve gonderime kadar gecen sureyi
// sunucu tarafinda kanitlar. Ayrintilar icin bkz. lead/bilet.ts
export async function GET(request: Request) {
  if (!originGecerliMi(request)) {
    return NextResponse.json({ hata: "gecersiz kaynak" }, { status: 403 });
  }

  const dogrulama = await checkBotId();
  if (dogrulama.isBot) {
    return NextResponse.json({ hata: "erisim reddedildi" }, { status: 403 });
  }

  return NextResponse.json(
    { bilet: biletUret() },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
