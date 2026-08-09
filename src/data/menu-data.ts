import { IMenuDT } from "@/types/menu-d-t";

// Menu bilerek sade tutuldu: ziyaretcinin karar yolu kisa olsun diye
// dropdown yok, her baslik dogrudan bir sayfaya gidiyor.
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Anasayfa',
    link: '/'
  },
  {
    id: 2,
    title: 'Hizmetlerimiz',
    link: '/service',
    dropdown_menus: []
  },
  {
    id: 3,
    title: 'AI Destekli Çözümler',
    link: '/ai-destekli-cozumler',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'Referanslar',
    link: '/referanslar',
    dropdown_menus: []
  },
  {
    id: 5,
    title: 'Hakkımızda',
    link: '/about-us',
    dropdown_menus: []
  },
  {
    id: 6,
    title: 'İletişim',
    link: '/contact',
    dropdown_menus: []
  }
];



export default menu_data;

// mobile menus
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
    {
      id: 1,
      title: 'Anasayfa',
      link: '/',
      dropdown_menus: []
    },
    {
      id: 2,
      title: 'Hizmetlerimiz',
      link: '/service',
      dropdown_menus: []
    },
    {
      id: 3,
      title: 'AI Destekli Çözümler',
      link: '/ai-destekli-cozumler',
      dropdown_menus: []
    },
    {
      id: 4,
      title: 'Referanslar',
      link: '/referanslar',
      dropdown_menus: []
    },
    {
      id: 5,
      title: 'Hakkımızda',
      link: '/about-us',
      dropdown_menus: []
    },
    {
      id: 6,
      title: 'Sıkça Sorulanlar',
      link: '/faq',
      dropdown_menus: []
    },
    {
      id: 7,
      title: 'İletişim',
      link: '/contact',
      dropdown_menus: []
    },
    {
      id: 8,
      title: 'Teklif Al',
      link: '/teklif',
      dropdown_menus: []
    }
  ]
