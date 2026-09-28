# CSS temizliği (28 Eyl 2026)

Şablondan gelen ve sitede hiçbir sayfada kullanılmayan 32 SCSS parçasının `@forward`
satırı yorum satırına alındı (mağaza, sepet, ödeme, giriş, profil, fiyat kaydırıcı, şablon
blog stilleri, kullanılmayan header/footer varyasyonları vb.).

Yöntem:
1. Her parçanın tanımladığı sınıflar build çıktısında (`.next/server/app` HTML + `.next/static/chunks` JS) arandı; hiçbiri geçmeyen parçalar aday oldu.
2. Temizlik öncesi ve sonrası 17 sayfada, 390 ve 1440 px genişlikte her öğenin 60 hesaplanmış stil özelliği kaydedilip karşılaştırıldı. Fark sıfır olmadan değişiklik canlıya alınmaz.

Bu parçalardan birine ait bir bileşeni yeniden kullanmak isterseniz ilgili `index.scss`
dosyasında satırın başındaki `//` işaretini kaldırmanız yeterli.
