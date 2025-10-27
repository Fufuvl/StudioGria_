import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Anasayfa',
    link: '/'
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
          { title: 'HİZMETLERİMİZ', link: '/service' },
          { title: 'HİZMET DETAYLARI', link: '/service-details' },
          { title: 'MÜŞTERİLERİMİZ', link: '/brand' },
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
    title: 'Portföy',
    link: '/portfolio-standard',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'İletişim',
    link: '/contact',
    dropdown_menus: []
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Anasayfa',
    link: '/',
    dropdown_menus:[]
  },
  {
    id: 2,
    title: 'Sayfalar',
    link: '#',
    dropdown_menus:[
      { title: 'HAKKIMIZDA', link: '/about-us' },
      { title: 'SSS Sayfası', link: '/faq' },
      { title: 'MÜŞTERİLERİMİZ', link: '/brand' },
      { title: 'HİZMETLERİMİZ', link: '/service' },
      { title: 'HİZMET DETAYLARI', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Portföy',
    link: '/portfolio-standard',
    dropdown_menus:[]
  },
  {
    id: 4,
    title: 'İletişim',
    link: '/contact',
    dropdown_menus: []
  }
]
