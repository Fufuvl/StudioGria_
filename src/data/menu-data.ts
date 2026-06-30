import { IMenuDT } from "@/types/menu-d-t";


const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Anasayfa',
    link: '/'
  },
  {
    id: 6,
    title: 'Hizmetlerimiz',
    link: '/service',
    dropdown_menus: []
  },
  {
    id: 7,
    title: 'Müşterilerimiz',
    link: '/brand',
    dropdown_menus: []
  },
  {
    id: 2,
    title: 'Sayfalar',
    link: '#',
    pages_mega_menu: {
      first: {
        title: 'SAYFALAR',
        submenus: [
          { title: 'HAKKIMIZDA', link: '/about-us' },
          { title: 'HİZMET DETAYLARI', link: '/service-details' },
          { title: 'SSS Sayfası', link: '/faq' },
        ]
      },
      second: {
        title: '',
        submenus: []
      },

    }
  },
  {
    id: 3,
    title: 'AI Destekli Çözümler',
    link: '/ai-destekli-cozumler',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'Portfolyo',
    link: '/portfolio-standard',
    dropdown_menus: []
  },
  {
    id: 5,
    title: 'İLETİŞİM',
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
      id: 6,
      title: 'Hizmetlerimiz',
      link: '/service',
      dropdown_menus: []
    },
    {
      id: 7,
      title: 'Müşterilerimiz',
      link: '/brand',
      dropdown_menus: []
    },
    {
      id: 2,
      title: 'Sayfalar',
      link: '#',
      dropdown_menus: [
        { title: 'HAKKIMIZDA', link: '/about-us' },
        { title: 'HİZMET DETAYLARI', link: '/service-details' },
        { title: 'SSS Sayfası', link: '/faq' },
      ]
    },
    {
      id: 3,
      title: 'AI Destekli Çözümler',
      link: '/ai-destekli-cozumler',
      dropdown_menus: []
    },
    {
      id: 4,
      title: 'Portfolyo',
      link: '/portfolio-standard',
      dropdown_menus: []
    },
    {
      id: 5,
      title: 'İLETİŞİM',
      link: '/contact',
      dropdown_menus: []
    }
  ]
