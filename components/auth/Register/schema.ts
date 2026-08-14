import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "الاسم يجب أن يكون حرفين على الأقل"),

    email: z
      .string()
      .email("البريد الإلكتروني غير صحيح"),

    password: z
      .string()
      .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),

    confirmPassword: z
      .string()
      .min(1, "تأكيد كلمة المرور مطلوب"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;