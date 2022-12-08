"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import DrinkCard from "@components/Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

type CarouselProps = {
  drinks: Drink[];
};
export const Carousel = (props: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: true });
  const { drinks } = props;

  return (
    <div className="flex items-center mt-6">
      <FaChevronLeft
        size={180}
        onClick={() => emblaApi?.scrollPrev()}
        className="cursor-pointer text-gray-600 hover:text-gray-500 active:text-gray-700"
      />
      <div className="overflow-y-hidden scrollbar-hide" ref={emblaRef}>
        <div className="flex gap-8 my-2">
          {drinks.map((drink: Drink) => (
            <Link
              className="flex-1 hover:scale-105 transition-transform cursor-pointer"
              href={`/drink/${drink.id}`}
              key={drink.id}
            >
              <DrinkCard drink={drink} />
            </Link>
          ))}
        </div>
      </div>
      <FaChevronRight
        size={180}
        onClick={() => emblaApi?.scrollNext()}
        className="cursor-pointer text-gray-600 hover:text-gray-500 active:text-gray-700"
      />
    </div>
  );
};
