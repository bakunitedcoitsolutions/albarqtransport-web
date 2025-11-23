"use client";

import { PHONE } from "@/utils";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo, useState } from "react";
import {
  ContactFormData,
  createContactFormSchema,
} from "@/schemas/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Popup from "../elements/Popup";

export default function Contact() {
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
      showError("Failed to send message. Please try again.");
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
      <section
        className="contact-section fix section-padding bg-cover"
        id="contact"
        style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
      >
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="contact-items">
                  <h3
                    className="wow fadeInUp rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl!"
                    data-wow-delay=".2s"
                  >
                    {t("contact.getInTouch")}
                  </h3>
                  <form
                    id="contact-form"
                    className="mt-4 mt-md-0"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            placeholder={t("contact.namePlaceholder")}
                            {...register("name")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                          {errors.name && (
                            <span className="text-red-500 text-sm mt-2 pb-3 block">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <input
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            {...register("email")}
                            className="rtl:text-lg! rtl:md:text-xl! lowercase!"
                          />
                          {errors.email && (
                            <span className="text-red-500 text-sm mt-2 pb-3 block">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            placeholder={t("contact.phonePlaceholder")}
                            {...register("phone")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                          {errors.phone && (
                            <span className="text-red-500 text-sm mt-2 pb-3 block">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            placeholder={t("contact.subjectPlaceholder")}
                            {...register("subject")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                          {errors.subject && (
                            <span className="text-red-500 text-sm mt-2 pb-3 block">
                              {errors.subject.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <textarea
                            placeholder={t("contact.messagePlaceholder")}
                            {...register("message")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                          {errors.message && (
                            <span className="text-red-500 text-sm -mt-2 pb-3 block">
                              {errors.message.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="theme-btn rtl:text-xl! rtl:md:text-2xl!"
                        >
                          {isSubmitting
                            ? t("contact.sending")
                            : t("contact.sendMessage")}
                          <i
                            className={`fas fa-long-arrow-right rtl:rotate-180! rtl:mr-3!`}
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <h6 className="text-white wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long rtl:rotate-180! rtl:ml-3!" />
                      <span className="rtl:text-2xl!">
                        {t("contact.preHeader")}
                      </span>
                      <i className="fa-regular fa-arrow-right-long rtl:rotate-180! ltr:ml-3! rtl:mr-3!" />
                    </h6>
                    <h2
                      className="text-white wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
                      data-wow-delay=".3s"
                    >
                      {t("contact.title")}
                    </h2>
                  </div>
                  <p
                    className="text-white mt-3 mt-md-0 wow fadeInUp rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!"
                    data-wow-delay=".5s"
                  >
                    {t("contact.description")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume rtl:rotate-180! text-center!" />
                    </div>
                    <div className="content">
                      <span className="rtl:text-lg! rtl:md:text-xl!">
                        {t("contact.callEmergency")}
                      </span>
                      <h4 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                        <Link href={`tel:${PHONE.replaceAll(" ", "")}`}>
                          {PHONE}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
