"use client";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
  { imgUrl: "/assets/images/am.png", alt: "books" },
];
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carousels = () => {
  return (
    <>
      <Carousel
        className="overflow-hidden"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((product, index) => (
            <CarouselItem key={index}>
              <Image
                src={product.imgUrl}
                alt={product.alt}
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
export default Carousels;
