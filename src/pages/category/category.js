import Link from "next/link";

const Category = ({ categories }) => {
  const sixCategories = categories?.slice(0, 6);

  return (
    <div className="mx-auto my-16">
      <h1 className="text-center mb-12 text-4xl font-bold">
        PRODUCT CATEGORIES
      </h1>
      <div className=" grid grid-cols-3 gap-12 mb-12">
        {sixCategories?.map((category) => (
          <div
            className="w-80 rounded-md text-xl bg-sky-400 mx-auto p-6 border-2 border-black justify-center text-center hover:bg-white"
            key={category?.categoryId}
          >
            <Link href={`/category/${category?.categoryId}`}>
              <button className="w-full">{category?.category}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
