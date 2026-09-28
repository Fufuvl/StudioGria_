import { Metadata } from 'next';
import ErrorMain from '@/page-components/error/error-main'
 
export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Studio Gria",
  description: "Aradığınız sayfa bulunamadı. Studio Gria ana sayfasına dönün veya menüden diğer sayfalarımıza göz atın.",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}