import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

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
      <SearchBar />
      <div className="flex flex-row items-center h-2 m-3 p-5 text-4xl font-extrabold gap-1">
        <div className="flex-none">{movieInfo.Title}</div>
        <div className="flex-auto text-sm">({movieInfo.Year})</div>
      </div>
      
      {movieData?
      <div className='m-2 p-5'>
        <p className="font-normal text-lg"><span className='font-bold'>Advisory Alcohol:</span> {movieData["data"]["advisoryAlcohol"] === 'Be the first to evaluate this category'?'Sorry, but there is no information available on this category right now':movieData["data"]["advisoryAlcohol"]}</p>
        <p className="font-normal text-lg"><span className='font-bold'>Advisory Frightening:</span> {movieData["data"]["advisoryFrightening"] === 'Be the first to evaluate this category'?'Sorry, but there is no information available on this category right now':movieData["data"]["advisoryFrightening"]}</p>
        <p className="font-normal text-lg"><span className='font-bold'>Advisory Nudity:</span> {movieData["data"]["advisoryNudity"] === 'Be the first to evaluate this category'?'Sorry, but there is no information available on this category right now':movieData["data"]["advisoryNudity"]}</p>
        <p className="font-normal text-lg"><span className='font-bold'>Advisory Profanity:</span> {movieData["data"]["advisoryProfanity"] === 'Be the first to evaluate this category'?'Sorry, but there is no information available on this category right now':movieData["data"]["advisoryProfanity"]}</p>
        <p className="font-normal text-lg"><span className='font-bold'>Advisory Violence:</span> {movieData["data"]["advisoryViolence"] === 'Be the first to evaluate this category'?'Sorry, but there is no information available on this category right now':movieData["data"]["advisoryViolence"]}</p>
      </div>
      : <div className='flex flex-col items-center mt-5 gap-2'><div className='text-xl font-semibold'>Loading...</div><svg class="icon-loading" height="90" width="90" viewBox="0 0 90 90"><g fill="#526D82" fill-rule="evenodd" transform="translate(1 1)" stroke="#fff" stroke-width="2"><circle cx="45" cy="45" r="12"><animate attributeName="r" begin="1.5s" dur="3s" values="12;45" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="4;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="45" cy="45" r="12"><animate attributeName="r" begin="3s" dur="3s" values="12;45" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="8;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="45" cy="45" r="16"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g></svg></div>}
    </div>
  )
}

export default MoviePGPage