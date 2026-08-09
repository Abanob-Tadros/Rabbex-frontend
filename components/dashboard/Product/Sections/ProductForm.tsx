"use client";
//lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
//schema
import {
  ProductFormData,
  productSchema,
} from "../components/Form/validation/schema";
//components
import BasicInfo from "../components/Form/BasicInfo";
import ProductSize from "../components/Form/ProductSize";
import Genders from "../components/Form/Gender";
import PricingAndStock from "../components/Form/PricingAndStock";
import UploadImages from "../components/Form/UploadImg";
import Category from "../components/Form/Category";
import ProductColor from "../components/Form/ProductColor";
//----------------------------
export default function ProductForm() {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col md:flex-row gap-4"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col p-4 bg-secondary-hover rounded-md gap-2 ">
            <h1 className="text-xl font-semibold">General information</h1>
            <BasicInfo />
            <div className="flex flex-row gap-4">
              <ProductSize />
              <Genders />
            </div>
          </div>
          {/* PricingAndStock */}
          <div className="flex flex-col bg-secondary-hover rounded-md gap-2 p-4">
            <PricingAndStock />
          </div>
        </div>

        <div className="w-full ">
          <UploadImages />
          <ProductColor />
          <Category />
          <button type="submit" className="px-4 py-3 bg-purple-500 rounded-md">
            Create Product
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
