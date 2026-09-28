# Font Awesome alt kümesi

`public/assets/fonts/fa-*.woff2|ttf` dosyaları yalnızca sitede kullanılan ikonları içerir
(28 Eyl 2026: tam sürüm 836 KB idi, alt küme ~7 KB). Kullanılan ikonlar
`public/assets/css/font-awesome-pro.css` içindeki `content:"\f..."` kod noktalarıdır.

Yeni ikon eklerken:

1. Tam fontları git geçmişinden çıkarın (alt kümeden önceki son commit `254da9c`):
   `git show 254da9c:public/assets/fonts/fa-light-300.ttf > /tmp/fa-light-300.ttf` (diğer üçü için de)
2. `font-awesome-pro-tam.css` içinden yeni ikonun sınıfını `font-awesome-pro.css`'e ekleyin.
3. Kod noktalarını toplayıp her font için alt küme üretin (Python fonttools):
   `python -m fontTools.subset /tmp/fa-light-300.ttf --unicodes="U+F005,U+F00C,..." --flavor=woff2 --output-file=public/assets/fonts/fa-light-300.woff2 --layout-features='*' --no-hinting`
   Aynı komutu `--flavor` olmadan `.ttf` çıktısı için de çalıştırın.
