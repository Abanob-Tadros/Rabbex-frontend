"use client";

import { useEffect } from "react";

// lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

// schema
import {
  ProductFormData,
  ProductFormInput,
  productSchema,
} from "../components/Form/validation/schema";

// components
import BasicInfo from "../components/Form/BasicInfo";
import ProductSize from "../components/Form/ProductSize";
import Genders from "../components/Form/Gender";
import Pricing from "../components/Form/Pricing";
import UploadImages from "../components/Form/UploadImg";
import Category from "../components/Form/Category";
import ProductColor from "../components/Form/ProductColor";
import VariantStock from "../components/Form/VariantStock";

const STORAGE_KEY = "product-form";

export default function ProductForm() {
  const form = useForm<ProductFormInput, undefined, ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: "",
      description: "",
      sizes: [],
      gender: undefined,
      price: undefined,
      discount: undefined,
      discountType: undefined,
      variantStock: {},
      colors: [],
      images: [],
      category: "",
    },
  });

  // Restore saved data after refresh
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) return;

    try {
      const parsedData = JSON.parse(savedData);

      form.reset({
        ...parsedData,
        images: [],
      });
    } catch (error) {
      console.error("Failed to restore product form:", error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [form]);

  // Save form automatically
  useEffect(() => {
    const subscription = form.watch((values) => {
      const { images, ...dataToSave } = values;

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dataToSave)
      );
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: ProductFormData) => {
    console.log(data);

    // After successful product creation
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
          w-full
          min-h-full
          bg-background
        "
      >
        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          {/* Main Content */}
          <main className="min-w-0 space-y-6">
            {/* General Info */}
            <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="mb-6 border-b border-border pb-4">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                  General Information
                </h1>

                <p className="mt-1 text-xs text-muted-foreground">
                  Add the basic information and product options
                </p>
              </div>

              <div className="space-y-6">
                <BasicInfo />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <ProductSize />
                  <Genders />
                </div>

                <ProductColor />
                <VariantStock />
              </div>
            </section>

            {/* Pricing */}
            <Pricing />
          </main>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 xl:sticky xl:top-6 xl:self-start">
            <UploadImages />
            <Category />

            <button
              type="submit"
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-md
                bg-accent
                px-5
                text-sm
                font-semibold
                text-accent-foreground
                shadow-sm
                transition-all
                duration-200

                hover:bg-accent-hover
                hover:shadow-md

                focus:outline-none
                focus:ring-2
                focus:ring-accent/30
                focus:ring-offset-2
                focus:ring-offset-background

                active:scale-[0.99]
              "
            >
              Create Product
            </button>
          </aside>
        </div>
      </form>
    </FormProvider>
  );
}