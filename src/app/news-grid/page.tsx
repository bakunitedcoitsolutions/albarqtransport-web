"use client";

import Layout from "@/components/layout/Layout";
import NewsSection from "@/components/sections/NewsSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsGrid(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.news"
        breadcrumbTitle="menu.newsTitle"
      >
        <NewsSection />
      </Layout>
    </>
  );
}
