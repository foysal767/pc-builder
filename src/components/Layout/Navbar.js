import Image from "next/image";
import avater from "../../assets/images/avatar.png";
const Navbar = () => {
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
              <ul className="p-2 space-y-1">
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>CPU/Processor</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Motherboard</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>RAM</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Power Supply Unit</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Storage Device</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Monitor</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-base-200">
                  <a>Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold border-white border-2 hover:border-black">
          PCBuildCraft
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2 space-y-1 z-[1]">
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>CPU/Processor</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Motherboard</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>RAM</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Power Supply Unit</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Storage Device</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Monitor</a>
                </li>
                <li className="bg-sky-400 rounded-md hover:bg-sky-200">
                  <a>Others</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end  flex justify-between">
        <button className="btn mx-auto bg-black text-white font-bold hover:bg-white hover:text-black hover:border-black border-2">
          PC BUILDER
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src={avater}
                width={700}
                alt="avatar"
                className="flex m-50"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
