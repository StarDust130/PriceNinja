import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/price";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Modal from "@/lib/models/product.models";
import IconWithText from "@/components/IconWithText";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-wrap items-start justify-between p-4">
      {/* Product Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <Image
          src={product.image}
          alt={product.title}
          className="mx-auto rounded-lg"
          width={400}
          height={400}
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 md:pl-4">
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <div className="flex items-center text-lg mb-4">
          <span className="text-orange-500 font-bold mr-2">
            {product.currentPrice}
          </span>
          {product.discountRate && (
            <span className="text-green-500 font-bold">
              {product.discountRate}% off
            </span>
          )}
        </div>

        {/* Shortened Description */}
        <p className="text-gray-700 mb-4">
          {product.description.substring(0, 2000)}...
        </p>

        {/* Icons for Additional Details */}
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
          <IconWithText
            icon="currency-dollar"
            text={`Original Price: ${product.originalPrice}`}
          />
          <IconWithText
            icon="chart-line"
            text={`Lowest Price: ${product.lowestPrice}`}
          />
          <IconWithText
            icon="chart-bar"
            text={`Highest Price: ${product.highestPrice}`}
          />
          <IconWithText
            icon="chart-pie"
            text={`Average Price: ${product.averagePrice}`}
          />
          <IconWithText
            icon="clock"
            text={`Price History: ${product.priceHistory}`}
          />
          <IconWithText icon="tag" text={`Category: ${product.category}`} />
          <IconWithText icon="star" text={`Rating: ${product.rating}`} />
          <IconWithText icon="chat-alt" text={`Reviews: ${product.reviews}`} />
        </div>

        {/* View Product Button */}
        <Link href={product.url} target="_blank">
          <Button>View Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
