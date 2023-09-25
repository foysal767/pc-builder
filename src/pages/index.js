import Banner from "@/components/Layout/Banner";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
