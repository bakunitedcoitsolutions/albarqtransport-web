import { z } from "zod";

export const createContactFormSchema = (t: (key: string) => string) => {
  return z.object({
    name: z
      .string()
      .min(2, t("contact.validation.nameMin"))
      .max(100, t("contact.validation.nameMax")),
    email: z
      .string()
      .email(t("contact.validation.emailInvalid"))
      .min(1, t("contact.validation.emailRequired")),
    phone: z
      .string()
      .min(10, t("contact.validation.phoneMin"))
      .optional()
      .or(z.literal("")),
    subject: z
      .string()
      .min(3, t("contact.validation.subjectMin"))
      .max(200, t("contact.validation.subjectMax")),
    message: z
      .string()
      .min(10, t("contact.validation.messageMin"))
      .max(1000, t("contact.validation.messageMax")),
  });
};

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
