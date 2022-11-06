import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "./Loader";
import Error from "./Error";
const noPic =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const MovieDetail = () => {
  const { id } = useParams();
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_DB_API_KEY}=${id}`;
  const { isError, isLoading, apiData } = useFetch(url, id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const { Title, Year, Plot, Poster } = apiData;

  return (
    <section className="movie__info-container">
      <img
        className="movie__info-img"
        src={Poster !== "N/A" ? Poster : noPic}
        alt={Title}
      />
      <article className="movie__info">
        <h1>{Title}</h1>
        <h3>{Plot}</h3>
        <p>{Year}</p>
        <Link className="back__home-btn" to="/">
          Back to Home
        </Link>
      </article>
    </section>
  );
};

export default MovieDetail;
