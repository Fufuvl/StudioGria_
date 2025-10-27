export interface ProjectDT {
  id: number;
  slug: string;
  title: string;
  category: string;
  img: string; // public path under /assets
  year: number;
  images?: string[];
}


