import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
