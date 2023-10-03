import Banner from "@/components/UI/Banner";
import RootLayout from "@/components/Layout/RootLayout";
import Featured from "@/components/UI/Featured";
import Category from "./category/category";

const HomePage = ({ featured, categories }) => {
  return (
    <div>
      <Banner></Banner>
      <Featured featured={featured} />
      <Category categories={categories} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured");
  const categories = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  const categoriesData = await categories.json();
  return {
    props: {
      featured: data,
      categories: categoriesData,
    },
    revalidate: 30,
  };
};
