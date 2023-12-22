import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const Genre = async ({ params: { id }, searchParams: { genre } }: Props) => {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5">
        <h1 className="text-6xl font-bold px-10">
          Results for {genre}
        </h1>
        <MoviesCarousel title={`Genre`} movies={movies} isVertical />
      </div>
    </div>
  );
};

export default Genre;
