import Image from "next/image";
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
              <p className="ms-4 my-6">Category: {feature.category}</p>
              <p className="ms-4 my-6">Price: {feature.price}</p>
              <p className="ms-4 my-6">Status: {feature.status}</p>
              <p className="ms-4 my-6">Rating: {feature.rating}</p>
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

export default Featured;
