import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryDetails = ({ category }) => {
  const { products } = category;
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold my-12 text-center">
        Products Category: {category?.category}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="card bg-base-100 shadow-xl h-[80vh]"
          >
            <figure className="h-[50%] content-center">
              <Image src={product?.image} alt="" width={500} height={300} />
            </figure>
            <div className=" space-y-2">
              <h2 className="card-title ms-4 my-6">{product?.name}</h2>
              <h1 className="ms-4 my-6">Price: {product?.price}</h1>
              <h1 className="ms-4 my-6">Status: {product?.status}</h1>
              <h1 className="ms-4 my-6">Rating: {product?.rating}</h1>
              <div className="card-actions justify-center">
                <Link href={`item/${product?.id}`}>
                  <button className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4">
                    View Details
                  </button>
                </Link>
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
  const res = await fetch(
    "https://pc-builder-web-app-server.vercel.app/categories"
  );
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
    `https://pc-builder-web-app-server.vercel.app/categories/${params?.categoryId}`
  );
  const data = await singleRes.json();
  return {
    props: {
      category: data,
    },
  };
};
