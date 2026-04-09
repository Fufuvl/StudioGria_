import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "Studio Gria - Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Studio Gria ana sayfasına dönün veya menüden diğer sayfalarımıza göz atın.",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}