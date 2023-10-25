/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import avater from "../../assets/images/avatar.png";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useGetAllCategoriesQuery } from "@/redux/features/products/productsApi";
import { allCategories } from "@/redux/features/products/productsSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllCategoriesQuery(undefined);
  dispatch(allCategories(data));
  const categories = data?.slice(0, 6);
  const { data: session } = useSession();
  return (
    <div className="navbar bg-sky-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Category</a>
              <ul className="p-2 space-y-1 text-start">
                {categories?.map((category) => (
                  <li
                    className="bg-sky-400 rounded-md hover:bg-sky-200 text-start"
                    key={category?._id}
                  >
                    <Link
                      href={`/category/${category?.categoryId}`}
                      className="text-start"
                    >
                      <button className="text-start">
                        {category?.category}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {session?.user ? (
              <li>
                <button onClick={() => signOut()} type="primary" danger>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl font-bold border-white border-2 hover:border-black">
            PCBuildCraft
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2 space-y-1 z-[1] text-start">
                {categories?.map((category) => (
                  <li
                    className="bg-sky-400 rounded-md hover:bg-sky-200 text-start"
                    key={category?._id}
                  >
                    <Link
                      href={`/category/${category?.categoryId}`}
                      className="text-start"
                    >
                      <button className="text-start">
                        {category?.category}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {session?.user ? (
            <li>
              <button onClick={() => signOut()} type="primary" danger>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end  flex justify-between">
        <Link href="/pcBuilder">
          <button className="btn mx-auto bg-black text-white font-bold hover:bg-white hover:text-black hover:border-black border-2">
            PC BUILDER
          </button>
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {!session?.user ? (
                <Image
                  src={avater}
                  width={700}
                  alt="avatar"
                  className="flex m-50"
                />
              ) : (
                <img
                  src={session?.user?.image}
                  alt="avater"
                  className="w-full"
                />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <a>Profile</a>
            </li>
            {session?.user ? (
              <li>
                <button onClick={() => signOut()} type="primary" danger>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
