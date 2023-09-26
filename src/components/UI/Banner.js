import Image from "next/image";
import heroImage from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row px-4 space-x-8 my-8">
        <Image
          src={heroImage}
          alt="pc builder image"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">PCBuildCraft News!</h1>
          <p className="py-6 pr-3">
            Design your dream PC effortlessly. Customize with precision, explore
            compatibility, and stay within budget. Your unique, high-performance
            rig starts here.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
