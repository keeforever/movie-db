import {Link} from 'react-router-dom';
// import noPic from '../no-pic.svg'
const noPic='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

const MovieCard = ({movie}) => {
  const {Poster,Title,Year,imdbID} = movie
  return (
    <article className="movie__card-container">
      <Link to={`/Movie/${imdbID}`}>
        <img className="movie__img" src={Poster!=="N/A" ? Poster : noPic} alt={Title} />
        <div className="movie__detail-hover">
          <h3 className="movie__name">{Title}</h3>
          <h3 className="movie__year">{Year}</h3>
        </div>
      </Link>
    </article>
  )
}

export default MovieCard
