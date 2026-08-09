import ProductForm from "@/components/dashboard/Product/Sections/ProductForm";
import { Icon } from "@iconify/react";

export default function page() {
  return (
    <div
      style={{ border: "1px solid red" }}
      className="w-full h-full flex flex-col p-5 gap-5"
    >
      <h1 className="text-2xl font-semibold flex  items-center gap-2">
        <Icon icon="ci:handbag" />
        Add New Product
      </h1>
      <ProductForm />
    </div>
  );
}
