import Banner from "@/components/UI/Banner";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import Featured from "@/components/UI/Featured";

const HomePage = ({ featured }) => {
  // console.log(featured, "featured data");
  return (
    <div>
      <Banner></Banner>
      <Featured featured={featured} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured");
  const data = await res.json();
  // console.log(data, "featured data");
  return {
    props: {
      featured: data,
    },
  };
};
