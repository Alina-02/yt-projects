import { StaticImageData } from "next/image";

export interface Blog {
  id?: number;
  _id?: number;
  title: string;
  description: string;
  image?: StaticImageData;
  date?: number;
  category: string;
  author: string;
  author_img: StaticImageData | string;
}

export interface Email {
  _id?: number;
  email: string;
  date?: number;
}
