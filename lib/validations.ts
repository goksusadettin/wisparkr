import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Ad Soyad en az 2 karakter olmalıdır")
    .max(100, "Ad Soyad en fazla 100 karakter olabilir"),
  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz"),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz")
    .max(20, "Geçerli bir telefon numarası giriniz")
    .regex(/^[+\d\s\-()]+$/, "Geçerli bir telefon numarası giriniz"),
  company: z.string().max(100, "Şirket adı en fazla 100 karakter olabilir").optional(),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  message: z
    .string()
    .min(20, "Mesaj en az 20 karakter olmalıdır")
    .max(2000, "Mesaj en fazla 2000 karakter olabilir"),
  kvkk: z.boolean().refine((val) => val === true, {
    message: "KVKK metnini onaylamanız gerekmektedir",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
