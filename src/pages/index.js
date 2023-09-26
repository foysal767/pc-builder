import Banner from "@/components/UI/Banner";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import Featured from "@/components/UI/Featured";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
