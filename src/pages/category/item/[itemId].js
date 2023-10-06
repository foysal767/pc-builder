/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";

const ProductDetails = ({ product }) => {
  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 w-8/12 mx-auto">
        <img src={product?.image} alt={product?.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-start w-8/12 mx-auto">
        <ul className="items-start">
          <li>
            <strong>Name:</strong> {product?.name}
          </li>
          <li>
            <strong>Category:</strong> {product?.category}
          </li>
          <li>
            <strong>Price:</strong> {product?.price}
          </li>
          <li>
            <strong>Rating: </strong>
            {product?.rating}
          </li>
          <li>
            <strong>Description: </strong>
            {product?.description}
          </li>
          <li>
            <strong>Individual Rating: </strong>
            {product?.rating}
          </li>
        </ul>
        <ul>
          <p>
            <strong>Key Features: </strong>
          </p>
          <li>
            <strong>Brand: </strong>
            {product?.keyFeatures?.Brand}
          </li>
          <li>
            <strong>Model: </strong>
            {product?.keyFeatures?.Model}
          </li>
          <li>
            <strong>Specification: </strong>
            {product?.keyFeatures?.Specification
              ? product.keyFeatures?.Specification
              : "N/A"}
          </li>
          <li>
            <strong>Type: </strong>
            {product?.keyFeatures?.Type ? product.keyFeatures?.Type : "N/A"}
          </li>
          <li>
            <strong>Port: </strong>
            {product?.keyFeatures?.Port ? product.keyFeatures?.Port : "N/A"}
          </li>
          <li>
            <strong>Voltage: </strong>
            {product?.keyFeatures?.Voltage
              ? product.keyFeatures?.Voltage
              : "N/A"}
          </li>
          <li>
            <strong>Resolution: </strong>
            {product?.keyFeatures?.Resolution
              ? product.keyFeatures?.Resolution
              : "N/A"}
          </li>

          <li>
            <strong>Status: </strong>
            <span
              style={{ color: "blue", fontSize: "16px", fontWeight: "bold" }}
            >
              {product?.status}
            </span>
          </li>
        </ul>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Build</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  const paths = data?.map((singleData) => ({
    params: { itemId: (singleData?.id).toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params?.itemId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
