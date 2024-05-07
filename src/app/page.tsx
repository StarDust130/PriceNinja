import Carousels from "@/components/Carousels";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import { getAllProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <section className="jersey-15-regular">
      <section className="min-h-screen  flex justify-center items-center mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto ">
          {/* Left Section: Introduction */}
          <div className="col-span-2 ">
            <div className="text-center md:text-left ">
              <h4 className="text-6xl md:text-[120px] text-center font-normal  mb-4">
                Welcome to Our Price
                <span className="text-red-500 font-bold  animate-in">
                  Ninja
                </span>
              </h4>
              <p className="text-lg text-center jersey-15-regular  mb-6">
                Explore our exciting courses and start learning today!
              </p>
              <Searchbar />
              <p className="text-sm text-center mt-10 ">
                Don&apos;t have a link?{" "}
                <Link href="/products" className="text-red-500 hover:underline">
                  Explore Our Catalog
                </Link>
              </p>
            </div>
          </div>

          {/* Right Section: Course Carousel */}
          <div className="col-span-1 relative">
            <Carousels />
            <Image
              src="/assets/icons/hand-drawn-arrow.svg"
              alt="arrow"
              width={231}
              height={222}
              property="arrow"
              className="max-xl:hidden absolute -left-[25%] bottom-0 z-0"
            />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-center  my-10 text-4xl">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
};
export default Home;
