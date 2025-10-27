import { ProjectDT } from "@/types/project-d-t";

export const projects: ProjectDT[] = [
  { id: 1, slug: "bodrum-pavillion", title: "Bodrum Pavillion", category: "Branding", img: "/assets/img/home-05/project/1.jpg", year: 2025, images: [
    "/assets/img/home-05/project/bodrum/2.jpg",
    "/assets/img/home-05/project/bodrum/3.jpg",
    "/assets/img/home-05/project/bodrum/4.jpg",
    "/assets/img/home-05/project/bodrum/5.jpg",
  ] },
  { id: 2, slug: "the-oba-hotel", title: "The Oba Hotel", category: "Branding", img: "/assets/img/home-05/project/9.jpg", year: 2025,images: [
    "/assets/img/home-05/project/obahotel/6.jpg",
    "/assets/img/home-05/project/obahotel/5.jpg",
    "/assets/img/home-05/project/obahotel/4.jpg",
    "/assets/img/home-05/project/obahotel/3.jpg",
    "/assets/img/home-05/project/obahotel/2.jpg",
    "/assets/img/home-05/project/obahotel/1.jpg",
  ]  },
  { id: 3, slug: "tykhe-beauty", title: "Tykhe Beauty", category: "Branding", img: "/assets/img/home-05/project/6.jpg", year: 2024, images: [
    "/assets/img/home-05/project/thy/1.jpg",
    "/assets/img/home-05/project/thy/2.jpg",
  ] },
  { id: 4, slug: "pacua-coffee", title: "Pacua Coffee", category: "Branding", img: "/assets/img/home-05/project/4.jpg", year: 2024, images: [
    "/assets/img/home-05/project/pacua/1.jpg",
    "/assets/img/home-05/project/pacua/2.jpg",
    "/assets/img/home-05/project/pacua/3.jpg",
    "/assets/img/home-05/project/pacua/6.jpg",
    "/assets/img/home-05/project/pacua/5.jpg",
  ] },
  { id: 5, slug: "oceanic-restoran", title: "Oceanic Restoran", category: "Branding", img: "/assets/img/home-05/project/2.jpg", year: 2024, images: [
    "/assets/img/home-05/project/oceanic/1.jpg",
    "/assets/img/home-05/project/oceanic/2.jpg",
    "/assets/img/home-05/project/oceanic/3.jpg",
    "/assets/img/home-05/project/oceanic/4.jpg",
    "/assets/img/home-05/project/oceanic/5.jpg",
    "/assets/img/home-05/project/oceanic/6.jpg",
  ] },
  { id: 13, slug: "kien", title: "Kien", category: "Branding", img: "/assets/img/home-05/project/kien/2.jpg", year: 2024, images: [
    "/assets/img/home-05/project/kien/1.jpg",
    "/assets/img/home-05/project/kien/3.jpg",
    "/assets/img/home-05/project/kien/4.jpg",
  ] },
  { id: 6, slug: "my-gym", title: "My Gym", category: "Concept", img: "/assets/img/home-05/project/3.jpg", year: 2024, images: [
    "/assets/img/home-05/project/mygym/1.jpg",
    "/assets/img/home-05/project/mygym/2.jpg",
    "/assets/img/home-05/project/mygym/4.jpg",
  ] },
  { id: 7, slug: "veloute", title: "Veloute", category: "Branding", img: "/assets/img/home-05/project/8.jpg", year: 2024, images: [
    "/assets/img/home-05/project/veloute/1.jpg",
    "/assets/img/home-05/project/veloute/2.jpg",
    "/assets/img/home-05/project/veloute/3.jpg",
  ] },
  { id: 8, slug: "soothe", title: "Soothe", category: "Branding", img: "/assets/img/home-05/project/11.jpg", year: 2024, images: [
    "/assets/img/home-05/project/Soothe/1.jpg",
    "/assets/img/home-05/project/Soothe/2.jpg",
    "/assets/img/home-05/project/Soothe/3.jpg",
  ] },
  { id: 9, slug: "nese-erbak", title: "Neşe Erbak", category: "Concept", img: "/assets/img/home-05/project/12.jpg", year: 2024, images: [
    "/assets/img/home-05/project/nese/5.jpg",
    "/assets/img/home-05/project/nese/6.jpg",
    "/assets/img/home-05/project/nese/7.jpg",
  ] },
  { id: 10, slug: "star-thermos", title: "Star Thermos", category: "Branding", img: "/assets/img/home-05/project/10.jpg", year: 2024, images: [
    "/assets/img/home-05/project/star/1.jpg",
    "/assets/img/home-05/project/star/2.jpg",
  ] },
  { id: 12, slug: "vona-lisa", title: "Vona Lisa", category: "Concept", img: "/assets/img/home-05/project/7.jpg", year: 2024, images: [
    "/assets/img/home-05/project/vonalisa/2.jpg",
    "/assets/img/home-05/project/vonalisa/3.jpg",
    "/assets/img/home-05/project/vonalisa/4.jpg",
  ] },
];

export function getProjectBySlug(slug: string): ProjectDT | undefined {
  return projects.find((p) => p.slug === slug);
}


