import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const CategoryDetails = ({ category }) => {
  const { products } = category;
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold my-12 text-center">
        CATEGORY: {category?.category}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product?.id}
            className="card bg-base-100 shadow-xl h-[80vh]"
          >
            <figure className="h-[40%]">
              <Image src={product?.image} alt="" width={500} height={200} />
            </figure>
            <div className=" space-y-2">
              <h2 className="card-title ms-4 my-6">{product?.name}</h2>
              <p className="ms-4 my-6">Price: {product?.price}</p>
              <p className="ms-4 my-6">Status: {product?.status}</p>
              <p className="ms-4 my-6">Rating: {product?.rating}</p>
              <div className="card-actions justify-center">
                <button className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;

CategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const allCategories = await res.json();
  const categories = allCategories.slice(0, 6);
  const paths = categories?.map((category) => ({
    params: { categoryId: category?.categoryId.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const singleRes = await fetch(
    `http://localhost:5000/categories/${params?.categoryId}`
  );
  const data = await singleRes.json();
  return {
    props: {
      category: data,
    },
  };
};