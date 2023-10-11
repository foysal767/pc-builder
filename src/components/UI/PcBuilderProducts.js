import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const PcBuilderProducts = ({ data }) => {
  const { data: session } = useSession();
  console.log(data, "data from pc builder page with user");
  const handleComplete = () => {
    toast.success("PC build Completed Successfully!");
  };
  return (
    <div className="my-20 w-10/12 mx-auto">
      <h1 className="text-4xl font-bold my-12 text-center">
        Selected Products
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((product) => (
          <>
            {product.user === session?.user?.email && (
              <div
                key={product.id}
                className="card bg-base-100 shadow-xl h-[80vh]"
              >
                <figure className="h-[40%]">
                  <Image
                    src={product?.product?.image}
                    alt={product?.product?.name}
                    width={500}
                    height={200}
                  />
                </figure>
                <div className=" space-y-2">
                  <h2 className="card-title ms-4 my-6">
                    {product?.product?.name}
                  </h2>
                  <p className="ms-4 my-6">
                    Category: {product?.product?.category}
                  </p>
                  <p className="ms-4 my-6">Price: {product?.product?.price}</p>
                  <p className="ms-4 my-6">
                    Status: {product?.product?.status}
                  </p>
                  <p className="ms-4 my-6">
                    Rating: {product?.product?.rating}
                  </p>
                  <div className="card-actions justify-center">
                    <Link href={`category/item/${product?.id}`}>
                      <button className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="text-center mt-8">
        {data?.length >= 6 ? (
          <button
            className="bg-sky-500 p-4 rounded-lg hover:bg-white hover:text-black font-normal text-xl border-2 border-black"
            onClick={() => {
              handleComplete();
            }}
          >
            Complete Build
          </button>
        ) : (
          <button className="disable p-4 rounded-lg bg-gray-400">
            Complete Build
          </button>
        )}
      </div>
    </div>
  );
};

export default PcBuilderProducts;
