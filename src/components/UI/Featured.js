import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold my-8 text-center">FEATURED PRODUCTS</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://m.media-amazon.com/images/I/71aY+mfIxiL._AC_UF1000,1000_QL80_.jpg"
              alt="Shoes"
              width={500}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
