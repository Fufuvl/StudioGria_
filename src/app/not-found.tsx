import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "Studio Gria - Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}