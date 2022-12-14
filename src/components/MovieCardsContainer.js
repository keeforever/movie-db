import useFetch from "../useFetch";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../context";
import Loader from "../pages/Loader";
import Error from "../pages/Error";

const MovieCardsContainer = () => {
  const { searchParams } = useGlobalContext();

  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_DB_API_KEY}=${searchParams}`;
  const { isLoading, isError, apiData } = useFetch(url, searchParams);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  const { Search } = apiData;

  return (
    <section className="movie__cards-container">
      {Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </section>
  );
};

export default MovieCardsContainer;
