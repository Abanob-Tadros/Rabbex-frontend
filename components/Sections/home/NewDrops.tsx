import Image from "next/image"
import Link from "next/link"
import Tshirt from "@/public/image/Category/Tshert.png"
import Sweetpants from "@/public/image/Category/Sweetpants.png"
const productData = [
    { productName: "T-Shirts", productImage: Tshirt, price: 20, rate: 4.5 },
    { productName: "Sweetpants", productImage: Sweetpants, price: 30, rate: 4.0 },]
export default function NewDrops() {
  return (
    <div>
        <h1 className="text-4xl font-bold mb-4">
            New Drops
        </h1>
        <div>

        </div>
    </div>
  )
}
import { Rating } from "@/components/reui/rating"
function productCard() {
  return (
    <div className="w-full h-fit max-w-75 flex flex-col items-center justify-center gap-2 border border-border rounded-md p-1">
        <div>
<Image
        src={productData.productImage}
        alt={productData.productName} />
        </div>
<div>
    {/* title */}
    {/* rate */}
    {/* price */}
</div>
    </div>
  )
}