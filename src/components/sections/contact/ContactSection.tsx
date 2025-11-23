"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Popup from "@/components/elements/Popup";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ContactFormData,
  createContactFormSchema,
} from "@/schemas/contactSchema";

export default function ContactSection() {
  const { t } = useLanguage();
  const [popup, setPopup] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize the schema so it updates when language changes
  const schema = useMemo(() => createContactFormSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const showSuccess = (message?: string) => {
    setPopup({
      isOpen: true,
      type: "success",
      title: t("contact.successTitle") || "Success!",
      message:
        message ||
        t("contact.successMessage") ||
        "Your message has been sent successfully. We will get back to you soon!",
    });
  };

  const showError = (message?: string) => {
    setPopup({
      isOpen: true,
      type: "error",
      title: t("contact.errorTitle") || "Error!",
      message:
        message ||
        t("contact.errorMessage") ||
        "Something went wrong. Please try again later.",
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          mobile: data.phone || "",
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        showSuccess(result.message);
        reset();
      } else {
        showError(result.message);
      }
    } catch (error) {
      showError(t("contact.sendFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setPopup({ ...popup, isOpen: false });
  };

  return (
    <>
      <Popup
        isOpen={popup.isOpen}
        onClose={closePopup}
        type={popup.type}
        title={popup.title}
        message={popup.message}
      />
      <section className="contact-section-22">
        <div className="container">
          <div className="contact-form-items">
            <div className="title text-center">
              <h2 className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-5xl!">
                {t("contact.formTitle")}
              </h2>
            </div>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="form-clt">
                    <input
                      type="text"
                      placeholder={t("contact.namePlaceholder")}
                      {...register("name")}
                    />
                    <div className="icon rtl:left-[30px]! rtl:right-auto!">
                      <i className="fa-regular fa-user" />
                    </div>
                  </div>
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-2 pb-3 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="form-clt">
                    <input
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      {...register("email")}
                    />
                    <div className="icon rtl:left-[30px]! rtl:right-auto!">
                      <i className="fa-regular fa-envelope" />
                    </div>
                  </div>
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-2 pb-3 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="form-clt">
                    <input
                      type="text"
                      placeholder={t("contact.phonePlaceholder")}
                      {...register("phone")}
                    />
                    <div className="icon rtl:left-[30px]! rtl:right-auto!">
                      <i className="fa-regular fa-phone" />
                    </div>
                  </div>
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-2 pb-3 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="form-clt">
                    <input
                      type="text"
                      placeholder={t("contact.subjectPlaceholder")}
                      {...register("subject")}
                    />
                    <div className="icon rtl:left-[30px]! rtl:right-auto!">
                      <i className="fa-regular fa-message" />
                    </div>
                  </div>
                  {errors.subject && (
                    <span className="text-red-500 text-sm mt-2 pb-3 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                  <div className="form-clt">
                    <textarea
                      placeholder={t("contact.messagePlaceholder")}
                      {...register("message")}
                    />
                    <div className="icon rtl:left-[30px]! rtl:right-auto!">
                      <i className="fa-sharp fa-light fa-pencil" />
                    </div>
                  </div>
                  {errors.message && (
                    <span className="text-red-500 text-sm -mt-2 pb-3 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="theme-btn w-100 rtl:text-lg! rtl:md:text-xl!"
                  >
                    {isSubmitting
                      ? t("contact.sending")
                      : t("contact.sendMessageNow")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
