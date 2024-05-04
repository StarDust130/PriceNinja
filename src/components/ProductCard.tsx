import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <>
      <Link href={`/products/${product._id}`}>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
