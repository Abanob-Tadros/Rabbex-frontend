import { z } from "zod";

const colorSchema = z.object({
  name: z.string(),
  hex: z.string(),
});

const sizeSchema = z.enum(["XS", "S", "M", "L", "XL", "XXL"]);

export const productSchema = z.object({
  // General information
  name: z.string().min(3, "Name is required"),

  description: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string()
      .min(10, "Description must be at least 10 characters")
      .optional(),
  ),

  sizes: z
    .array(sizeSchema)
    .min(1, "Please select at least one size"),

  gender: z.enum(["male", "female", "unisex"], {
    message: "Please select a gender",
  }),

  // Pricing
  price: z.number().min(0, "Price must be greater than 0"),

  discount: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z
      .number()
      .min(0, "Discount cannot be negative")
      .max(100, "Discount cannot exceed 100")
      .optional(),
  ),

  discountType: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().min(1, "Please select discount type").optional(),
  ),

  variantStock: z.record(
    z.string(),
    z.record(
      sizeSchema,
      z.number().min(0, "Stock cannot be negative"),
    ),
  ),

  // Product Color
  colors: z
    .array(colorSchema)
    .min(1, "Select at least one color"),

  // Upload Images
  images: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one image")
    .max(5, "You can upload maximum 5 images"),

  // Product Category
  category: z.string().min(1, "Please select a category"),
});

export type ProductFormData = z.output<typeof productSchema>;
export type ProductFormInput = z.input<typeof productSchema>;