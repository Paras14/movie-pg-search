import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function MoviePGPage() {
  const [movieData, setMovieData] = useState(null);
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();

  console.log("movieId: ",movieId);

  useEffect(() => {
    fetch(`http://localhost:8080/scrap?movieID=${movieId}`)
    .then((data) => data.json())
    .then((data) => setMovieData(data))
    .catch((err) => console.log(err));
  },[movieId]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_OMDB_KEY}`)
    .then((data) => data.json())
    .then((data) => setMovieInfo(data))
    .catch((err) => {
      console.log(err);
    })
  },[movieId])

  return (
    <div>
        <div className="flex flex-row items-center h-2 m-3 p-5 text-4xl font-extrabold gap-1">
          <div className="flex-none">{movieInfo.Title}</div>
          <div className="flex-auto text-sm">({movieInfo.Year})</div>
        </div>
        {movieData?
        <div className='m-2 p-5'>
          <p className="font-normal text-lg"><span className='font-bold'>Advisory Alcohol:</span> {movieData["data"]["advisoryAlcohol"]}</p>
          <p className="font-normal text-lg"><span className='font-bold'>Advisory Frightening:</span> {movieData["data"]["advisoryFrightening"]}</p>
          <p className="font-normal text-lg"><span className='font-bold'>Advisory Nudity:</span> {movieData["data"]["advisoryNudity"]}</p>
          <p className="font-normal text-lg"><span className='font-bold'>Advisory Profanity:</span> {movieData["data"]["advisoryProfanity"]}</p>
          <p className="font-normal text-lg"><span className='font-bold'>Advisory Violence:</span> {movieData["data"]["advisoryViolence"]}</p>
        </div>
        :''}
    </div>
  )
}

export default MoviePGPage