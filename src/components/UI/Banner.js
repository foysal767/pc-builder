import Image from "next/image";
import heroImage from "../../assets/images/hero.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row px-8 space-x-8 my-8">
        <Image
          src={heroImage}
          alt="pc builder image"
          className="w-4/12 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">PCBuildCraft News!</h1>
          <p className="py-6 pr-3">
            Design your dream PC effortlessly. Customize with precision, explore
            compatibility, and stay within budget. Your unique, high-performance
            rig starts here.
          </p>
          <Link href="">
            <button className="btn bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 mb-4">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
