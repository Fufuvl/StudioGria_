# Proje Boyutlandırma İyileştirmesi

## Mevcut Durum
`src/components/project/project-five.tsx` dosyasındaki `ProjectFive` bileşeninde, proje görselleri `Image` bileşeni kullanılarak sabit `width={500}` ve `height={300}` değerleriyle işlenmektedir. Bu durum, farklı boyutlardaki görsellerin oranlarının bozulmasına ve 'More Projects' butonuna basıldığında projelerin aynı boyutta görünmemesine neden olmaktadır.

## Önerilen Değişiklik
`src/components/project/project-five.tsx` dosyasında aşağıdaki değişiklikler yapılacaktır:
1. `Image` bileşenindeki `width` ve `height` özelliklerini kaldırıp `fill` özelliğini ekledim.
2. `Image` bileşenini saran `div` elementine, görsellerin kapsayıcısının boyutunu belirlemek için `project-image-container` CSS sınıfını ekledim.
3. `public/assets/scss/main.scss` dosyasına `project-image-container` sınıfı için gerekli CSS kurallarını ekledim. Bu kurallar:
   ```scss
   .project-image-container {
     position: relative;
     height: 300px; /* İstediğiniz yüksekliği ayarlayın */
     width: 100%;
     overflow: hidden;
   }
   ```

## Responsive İyileştirmeler
`portfolio-standard-main.tsx` sayfasının responsive tasarımını iyileştirmek için aşağıdaki değişiklikler yapıldı:
1. `public/assets/scss/layout/pages/_hero.scss` dosyasına `tm-hero-area` sınıfı için arkaplan görüntüsünün responsive davranmasını sağlayacak CSS özellikleri eklendi:
   ```scss
   .tm-hero-area {
     background-size: cover;
     background-position: center center;
     background-repeat: no-repeat;
   }
   ```
2. `public/assets/scss/layout/pages/_hero.scss` dosyasına `tm-hero-content` ve `tm-hero-title` sınıfları için responsive stiller eklendi ve güncellendi:
   ```scss
   .tm-hero-content {
       text-align: center;
       @media #{$xs} {
           text-align: center;
       }
   }

   .tm-hero-title {
       font-weight: 400;
       font-size: 220px;
       line-height: 1;
       color: var(--tp-common-black);
       font-family: var(--tp-ff-gallery);
       word-break: break-word; /* Yeni eklendi */
       @media #{$xxxl,$xxl} {
           font-size: 175px;
       }
       @media #{$xl} {
           font-size: 150px;
       }
       @media #{$lg} {
           font-size: 120px;
       }
       @media #{$md} {
           font-size: 100px;
       }
       @media #{$xs} {
           font-size: 40px; /* Güncellendi */
           line-height: 1.2; /* Yeni eklendi */
       }
       @media #{$sm} {
           font-size: 60px; /* Güncellendi */
           line-height: 1.2; /* Yeni eklendi */
       }
   }
   ```
Bu değişiklikler, hem portfolio sayfasındaki hero bölümü arka plan görüntüsünün hem de iletişim sayfasındaki "Bizimle iletişime geçin" başlığının farklı ekran boyutlarında doğru şekilde ölçeklenmesini ve konumlanmasını sağlayacaktır.

## Beklenen Sonuç
Bu değişiklikler sonucunda, `portfolio-standard-main.tsx` ve `contact.tsx` sayfaları farklı ekran boyutlarında daha iyi bir kullanıcı deneyimi sunacaktır. Hero bölümündeki metinler ve görsellerin responsive ayarları sayesinde, sayfalar mobil cihazlarda ve daha büyük ekranlarda düzgün bir şekilde görüntülenecektir. 