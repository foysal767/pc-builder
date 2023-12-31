import RootLayout from "@/components/Layout/RootLayout";
import Category from "@/components/UI/Category";
import React from "react";

const pcBuilderPage = ({ categories }) => {
  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default pcBuilderPage;

pcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-web-app-server.vercel.app/categories"
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};
