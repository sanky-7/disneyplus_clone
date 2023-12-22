"use client";
import { Movie } from "@/typings";
import UseEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

type Props = {
  movies: Movie[];
};

Autoplay.globalOptions = { delay: 8000 };

const CarouselBanner = ({ movies }: Props) => {
  const [emblaRef] = UseEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
        <div className="flex">
            {movies.map(movie => (
                <div key={movie.id} className="flex-full min-w-0 relative">
                    <Image 
                        key={movie.id}
                        src={getImagePath(movie.backdrop_path, true)}
                        alt=""
                        width={1920}
                        height={1080}
                    />
                    <div className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 ml6 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-l from-gray-200/0 to-[#D4F1F4]/10 dark:to-[#14143c]/80">
                        <h2 className="text-5xl font-bold max-w-xl z-50 ml-6 mb-2">{movie.title}</h2>
                        <p className="max-w-xl line-clamp-3 ml-6">{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
        <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-600/25 to-white dark:to-[#14143c]"
        />
    </div>
  )
};

export default CarouselBanner;
