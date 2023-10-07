import RootLayout from "@/components/Layout/RootLayout";
import { useAddPcBuilderProductMutation } from "@/redux/features/products/productsApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryProducts = ({ category }) => {
  const { products } = category;
  const [addProduct] = useAddPcBuilderProductMutation();
  const handleAddProduct = async (product) => {
    try {
      const result = await addProduct(product);
      if (result.error) {
        alert("This product is already added!");
      } else {
        alert("This product is added successfully!");
      }
    } catch (error) {
      console.error(error, "Error adding products!");
    }
  };
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold my-12 text-center">
        Products Category: {category?.category}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product?.id}
            className="card bg-base-100 shadow-xl h-[80vh]"
          >
            <figure className="h-[50%] content-center">
              <Image src={product?.image} alt="" width={500} height={300} />
            </figure>
            <div className=" space-y-2">
              <h2 className="card-title ms-4 my-6">{product?.name}</h2>
              <p className="ms-4 my-6">Price: {product?.price}</p>
              <p className="ms-4 my-6">Status: {product?.status}</p>
              <p className="ms-4 my-6">Rating: {product?.rating}</p>
              <div className="card-actions justify-center">
                <Link href={`item/${product?.id}`}>
                  <button className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4">
                    View Details
                  </button>
                </Link>
                <button
                  className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4"
                  onClick={() => handleAddProduct(product)}
                >
                  Add to Build
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const allCategories = await res.json();
  const categories = allCategories.slice(0, 6);
  const paths = categories?.map((category) => ({
    params: { pcBuilderId: category?.categoryId.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const singleRes = await fetch(
    `http://localhost:5000/categories/${params?.pcBuilderId}`
  );
  const data = await singleRes.json();
  return {
    props: {
      category: data,
    },
  };
};
