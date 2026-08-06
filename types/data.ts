import Tshirt from "@/public/image/Category/Tshert.png"
import Sweetpants from "@/public/image/Category/Sweetpants.png"
import { Product } from "@/types/Product "
export const productData: Product[] = Array.from({ length: 100 }, (_, index) => ({
  productName:
    index % 2 === 0
      ? `T-Shirt ${index + 1}`
      : `Sweetpants ${index + 1}`,

  productImage: index % 2 === 0 ? Tshirt : Sweetpants,

  price: 20 + (index % 15) * 5,

  rate: [3.5, 4.0, 4.2, 4.5, 4.8, 5.0][index % 6],
}));