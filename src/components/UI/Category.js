import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { allProducts } from "@/redux/features/products/productsSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import PcBuilderProducts from "./PcBuilderProducts";

const Category = ({ categories }) => {
  const dispatch = useDispatch();
  const { data } = useGetAllProductsQuery(undefined);
  dispatch(allProducts(data));
  console.log(data, "data");

  const sixCategories = categories.slice(0, 6);

  return (
    <>
      <PcBuilderProducts data={data} />
      <div className="mx-auto my-16">
        <h1 className="text-center mb-12 text-4xl font-bold">
          PRODUCT CATEGORIES
        </h1>
        <div className=" grid grid-cols-3 gap-12 mb-12">
          {sixCategories?.map((category) => (
            <>
              <div className="w-80 rounded-md border-2 border-black text-center py-6">
                <h1 className="text-2xl font-bold mb-6">
                  {category?.category}
                </h1>
                <Link
                  href={`/pcBuilder/${category?.categoryId}`}
                  key={category?.categoryId}
                >
                  <button className="w-1/2 rounded-md text-xl bg-sky-400 mx-auto p-2 border border-black justify-center text-center hover:bg-black hover:text-white">
                    Choose/Select
                  </button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
