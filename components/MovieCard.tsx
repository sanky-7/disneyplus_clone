import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 to-[#D4F1F4]/20 dark:to-[#14143c]/80 z-10" />
      <p className="absolute z-20 bottom-5 left-5 font-bold text-white">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;
