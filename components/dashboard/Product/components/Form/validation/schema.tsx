import { z } from "zod";

export const productSchema = z.object({
  //General information
  name: z.string().min(3, "Name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  sizes: z
  .array(
    z.enum(["XS", "S", "M", "L", "XL", "XXL"])
  )
  .min(1, "Please select at least one size"),
  gender: z.enum(["male", "female", "unisex"], {
    message: "Please select a gender",
  }),
  // -------------------------------------
  //Pricing and Stock
  price: z.number().min(0, "Price must be greater than 0"),
  stock: z
    .number()
    .int("Stock must be a whole number")
    .min(0, "Stock cannot be negative"),
  discount: z
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100"),
  discountType: z.string().min(1, "Please select discount type"),
  // -------------------------------------
  //Product Color
  colors: z
  .array(z.string())
  .min(1, "Select at least one color"),
  // -------------------------------------
  //Upload Images
  images: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one image")
    .max(5, "You can upload maximum 5 images"),

  // -------------------------------------
  //Product Category
  category: z.string().min(1, "Please select a category"),
});

export type ProductFormData = z.infer<typeof productSchema>;
