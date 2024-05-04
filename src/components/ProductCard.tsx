import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <>
      <Link
        href={`/products/${product._id}`}
        className="block w-full md:w-72 rounded-lg overflow-hidden shadow-lg  mx-auto border border-gray-200 hover:border-gray-400 border-dashed hover:scale-105 transform transition-transform duration-300"
      >
        <div className="relative  md:h-52 mx-10 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="cursor-pointer object-center object-contain mt-2 rounded-lg  w-full h-full"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium  mb-2 truncate hover:text-gray-600 ">
            {product.title}
          </h3>

          <div className="flex justify-between items-center">
            <p className="text-sm ">{product.category}</p>

            <p className="text-lg ">
              <span className="mr-1">{product.currency}</span>
              <span>{product.currentPrice}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
