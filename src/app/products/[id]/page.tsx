import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/price";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bookmark, ChevronLeft, MessageSquareMore, Share2 } from "lucide-react";
import HeartIcon from "@/components/HeartIcon";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

  if (!product) redirect("/");

  const similarProducts = await getSimilarProducts(id);

  return (
    <>
      <div className=" flex flex-col md:gap-16 md:flex-wrap md:px-20 px-12 sm:px-6 mt-10 mb-20">
        <div className="flex gap-28 w-full md:flex-row flex-col">
          <div className=" w-full xl:w-1/2  md:py-16  rounded-lg ">
            <Image
              src={product.image}
              alt={product.title}
              width={580}
              height={400}
              className="mx-auto rounded-lg "
            />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start gap-5 flex-wrap md:pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-[28px]  font-normal">{product.title}</p>

                <Button variant={"link"}>
                  <Link
                    href={product.url}
                    target="_blank"
                    className="text-base"
                  >
                    Visit Product
                  </Link>
                </Button>
              </div>

              <div className="flex items-center text-2xl w-full justify-start gap-3 text-center">
                <div className="flex items-center gap-2 px-3 py-2  rounded-full cursor-pointer">
                  <HeartIcon />
                </div>

                <div className="p-2 bg-white-200 rounded-10 cursor-pointer ">
                  <Button
                    variant={"outline"}
                    className="bg-yellow-300 text-black hover:bg-yellow-400 hover:text-black"
                  >
                    <Bookmark size={16} strokeWidth={3} />
                  </Button>
                </div>

                <div className="p-2 bg-white-200 rounded-10 cursor-pointer">
                  <Button
                    variant={"outline"}
                    className="bg-blue-300 text-black hover:bg-blue-400 hover:text-black"
                  >
                    <Share2 size={16} strokeWidth={3} />
                  </Button>
                </div>
              </div>
            </div>
            <hr />

            <div className="flex items-center flex-wrap gap-10 py-6 border-b border-gray-300">
              <div className="flex flex-col gap-2">
                <p className="text-[34px]  font-normal">
                  {product.currency} {formatNumber(product.currentPrice)}
                </p>
                <p className="text-[21px]  opacity-50 line-through">
                  {product.currency} {formatNumber(product.originalPrice)}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-2  rounded-full">
                    <Image
                      src="/assets/icons/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <p className="text-sm  font-normal">
                      {product.stars || "25"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2  rounded-full">
                    <MessageSquareMore size={16} strokeWidth={3} />
                    <p className="text-sm  font-normal">
                      {product.reviewsCount} Reviews
                    </p>
                  </div>
                </div>

                <p className="text-sm">
                  <span className=" font-normal">
                    {Math.floor(Math.random() * (80 - 40 + 1)) + 40}%{" "}
                  </span>{" "}
                  of buyers have recommeded this.
                </p>
              </div>
            </div>

            <div className="my-7 flex flex-col  gap-5">
              <div className="flex gap-5 flex-wrap mx-auto text-center items-center ml-12 md:ml-0  ">
                <PriceInfoCard
                  title="Current Price"
                  iconSrc="/assets/icons/price-tag.svg"
                  value={`${product.currency} ${formatNumber(
                    product.currentPrice
                  )}`}
                />
                <PriceInfoCard
                  title="Average Price"
                  iconSrc="/assets/icons/chart.svg"
                  value={`${product.currency} ${formatNumber(
                    product.averagePrice
                  )}`}
                />
                <PriceInfoCard
                  title="Highest Price"
                  iconSrc="/assets/icons/arrow-up.svg"
                  value={`${product.currency} ${formatNumber(
                    product.highestPrice
                  )}`}
                />
                <PriceInfoCard
                  title="Lowest Price"
                  iconSrc="/assets/icons/arrow-down.svg"
                  value={`${product.currency} ${formatNumber(
                    product.lowestPrice
                  )}`}
                />
              </div>
            </div>

            {/* <Modal productId={id} /> */}
          </div>
        </div>

        <div className="flex flex-col gap-16 text-center md:text-start ">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl  font-normal text-center">
              Product Description
            </h3>

            <div className="flex flex-col gap-4">
              {product?.description?.split("\n")}
            </div>
          </div>

          <Button variant={"default"} className="mx-auto">
            <Image
              src="/assets/icons/bag.svg"
              alt="check"
              width={22}
              height={22}
            />

            <Link
              href={product.url}
              target="_blank"
              className="text-base ml-1 "
            >
              Buy Now
            </Link>
          </Button>
        </div>

        {similarProducts && similarProducts?.length > 0 && (
          <div className="py-14 flex flex-col gap-2 w-full">
            <p className="text-[32px] font-normal text-center">
              Similar Products
            </p>

            <div className="flex flex-wrap gap-10 mt-7 w-full">
              {similarProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Back Button  */}
      <Link href="/" className=" absolute top-20 left-4 z-50">
        <Button variant="outline" className="border-none bg-transparent">
          <span className="flex items-center">
            <ChevronLeft className="" />
            <span className="text-lg ml-2">Back</span>
          </span>
        </Button>
      </Link>
    </>
  );
};

export default ProductDetails;
