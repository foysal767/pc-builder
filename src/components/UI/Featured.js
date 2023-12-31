import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = ({ featured }) => {
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold my-12 text-center">
        FEATURED PRODUCTS
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {featured.map((feature) => (
          <div key={feature.id} className="card bg-base-100 shadow-xl h-[80vh]">
            <figure className="h-[40%]">
              <Image
                src={feature.image}
                alt={feature.name}
                width={500}
                height={200}
              />
            </figure>
            <div className=" space-y-2">
              <h2 className="card-title ms-4 my-6">{feature.name}</h2>
              <h1 className="ms-4 my-6">Category: {feature.category}</h1>
              <h1 className="ms-4 my-6">Price: {feature.price}</h1>
              <h1 className="ms-4 my-6">Status: {feature.status}</h1>
              <h1 className="ms-4 my-6">Rating: {feature.rating}</h1>
              <div className="card-actions justify-center">
                <Link href={`category/item/${feature?.id}`}>
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

export default Featured;
