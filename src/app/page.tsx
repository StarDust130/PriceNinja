import Carousels from "@/components/Carousels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
          {/* Left Section: Introduction */}
          <div className="col-span-2">
            <div className="text-center md:text-left">
              <h4 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Welcome to Our <span className="text-red-500">PriceWise</span>
              </h4>
              <p className="text-lg text-gray-600 mb-6">
                Explore our exciting courses and start learning today!
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Enter product link" />
                <Button type="submit">Search</Button>
              </div>
              <p className="text-sm text-gray-500">
                Don&apos;t have a link?{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Explore Our Catalog
                </a>
              </p>
            </div>
          </div>

          {/* Right Section: Course Carousel */}
          <div className="col-span-1">
            <div className="p-6 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Check out our latest products
              </h2>
              <div className="overflow-hidden rounded-lg">
                {/* Place your carousel component here */}
                <Carousels />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
