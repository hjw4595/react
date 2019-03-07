import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className='Movie'>
      <div className='Movie__col'>
        <h1>{title}</h1>
        <div className='Movie__Genres'>
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className='Movie__synopsis'>
          {synopsis}
        </p>
      </div>
      <div className='Movie__col'>
        <MoviePoster poster={poster} alt={title}/>
      </div>
    </div>
  )
}
function MovieGenre({genre}) {
  return (
    <span className="MovieGenre">{genre}</span>
  )
}
// state가 있는 클래스 class MoviePoster extends Component{     render() { return (
// <img src={this.props.poster}/>         )       }   } state 가 없는 function 사용
function MoviePoster({poster, alt}) {
  return (<img src={poster} alt={alt} className="Movie__Poster"/>)
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}
export default Movie