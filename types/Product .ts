import { StaticImageData } from "next/image";

export interface Product {
  productName: string;
  productImage: StaticImageData;
  price: number;
  rate: number;
}