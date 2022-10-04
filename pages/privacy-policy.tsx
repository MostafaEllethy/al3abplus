import { Category } from "@prisma/client";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FC } from "react";
import { BRAND_NAME } from "../constants";
import SideCategoriesLayout from "../layouts/SideCategoriesLayout";
import { fetchCategories } from "../lib/fetch-categories";

const DynamicComponent = dynamic(() => import("../components/PrivacyPolicy"));

const PrivacyPolicyPage: FC<{ categories: Category[] }> = ({ categories }) => (
  <SideCategoriesLayout categories={categories}>
    <Head>
      <title>{`سياسة الخصوصية - ${BRAND_NAME} ألعاب مجانية عبر الانترنت`}</title>
      <meta
        name="description"
        content="نقدر مخاوفكم واهتمامكم بشأن خصوصية بياناتكم على العاب+.
        لقد تم إعداد هذه السياسة لمساعدتكم على فهم طبيعة تعاملنا مع البيانات الشخصية."
      />
    </Head>
    <DynamicComponent />
  </SideCategoriesLayout>
);

export async function getStaticProps() {
  return {
    props: {
      categories: await fetchCategories(),
    },
    revalidate: 900,
  };
}

export default PrivacyPolicyPage;
