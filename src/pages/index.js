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
  try {
    const res = await fetch(
      "https://pc-builder-web-app-server.vercel.app/featured"
    );
    const categories = await fetch(
      "https://pc-builder-web-app-server.vercel.app/categories"
    );
    const data = await res.json();
    const categoriesData = await categories.json();
    return {
      props: {
        featured: data,
        categories: categoriesData,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        featured: [],
        categories: [],
      },
      revalidate: 30,
    };
  }
};
