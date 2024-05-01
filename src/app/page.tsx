import Carousels from "@/components/Carousels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto ">
          {/* Left Section: Introduction */}
          <div className="col-span-2 ">
            <div className="text-center md:text-left ">
              <h4 className="text-4xl sm:text-6xl md:text-8xl text-center font-semibold  mb-4">
                Welcome to Our Price
                <span className="text-red-500 font-bold  animate-in">Wise</span>
              </h4>
              <p className="text-lg text-center  mb-6">
                Explore our exciting courses and start learning today!
              </p>
              <div className="flex w-full mx-auto mt-20 justify-center max-w-2xl items-center space-x-4">
                <Input type="text" placeholder="Enter product link" />
                <Button type="submit">Search</Button>
              </div>
              <p className="text-sm text-center mt-10 ">
                Don&apos;t have a link?{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Explore Our Catalog
                </a>
              </p>
            </div>
          </div>

          {/* Right Section: Course Carousel */}
          <div className="col-span-1 relative">
            <Carousels />
            <Image
              src="/assets/icons/hand-drawn-arrow.svg"
              alt="arrow"
              width={175}
              height={175}
              className="max-xl:hidden absolute -left-[25%] bottom-0 z-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
