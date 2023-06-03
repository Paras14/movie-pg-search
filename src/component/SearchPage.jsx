import {React, useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {useSearchParams, useNavigate} from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchPage() {

  // const [search, setSearch] = useState('');
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  let search = searchParams.get('q');

  useEffect(() => {
    if(search.trim() === ''){
      return;
    }
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_KEY}&type=movie`)
    .then((data) => data.json())
    .then((data) => {
      console.log("data : ",data);
      setMovieData(data.Search);
    })
    .catch((err) => {
      console.log(err);
    })
  },[search])

  console.log(movieData);
  
  const movieCardHandle = (imdbID) => {
    navigate(`/moviepage/${imdbID}`);
  }

    const searchExceptionHandler = () => {
      return(
        <div className="mx-auto my-auto text-xl z-10">Movie not found!</div>
      );
    }
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mx-8 my-6">
        {movieData?movieData.map((movie) => <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} cardHandle={() => movieCardHandle(movie.imdbID)} />): searchExceptionHandler()}
      </div>
    </div>
  )
}

export default SearchPage