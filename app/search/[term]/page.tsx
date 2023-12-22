import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: Props) => {
  if(!term) notFound();
  const termTOUse = decodeURI(term);

  const movies = await getSearchedMovies(termTOUse);
  const popularMovies = await getPopularMovies();

  return (
  <div className="mt-20 max-w-7xl mx-auto">
    <div className="flex flex-col space-y-4">
      <h1 className="text-6xl font-bold px-10">Results for {termTOUse}</h1>
      <MoviesCarousel title="Movies" movies={movies} isVertical />
      <MoviesCarousel title="You may also like" movies={popularMovies} />
    </div>
  </div>
  )
};

export default SearchPage;
