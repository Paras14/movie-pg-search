import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import posterPlaceHolder from '../assets/poster-holder.jpg';

function MoviePGPage() {
  const [movieData, setMovieData] = useState(null);
  const [movieInfo, setMovieInfo] = useState('');
  const { movieId } = useParams();
  const cardComponentStyle = {
    backgroundImage: `url(${movieInfo.Poster==="N/A" ? posterPlaceHolder : movieInfo.Poster})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

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
      <div className='lg:px-20 md:px-16 sm:px-8 px-2'>
        <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col items-start my-5 mx-14 
        text-5xl font-staatliches gap-10 bg-pgMovieCardBg lg:p-8 p-2 rounded-sm">
          <div className="flex-none
          md:p-[4px] md:h-[221px] md:w-[120px]
          lg:p-[4px] lg:h-[221px] lg:w-[120px]
          sm:p-[4px] sm:h-[221px] sm:w-[120px]
          p-[6px] h-[440px] w-[240px] mx-auto" style={cardComponentStyle}></div>
          <div className="flex-auto flex flex-col lg:mt-8 md:mt-8 sm:mt-8 mt-2 mx-auto">
            <div className="flex-none">{movieInfo.Title}</div>
            <div className="flex-auto text-sm">({movieInfo.Year})</div>
          </div>
        </div>
        {movieData?
        <div className='m-2 p-5 flex flex-col gap-8 font-robotoCondensed'>
          <p className="font-normal bg-categBg p-5 rounded"><span className='font-black text-xl'>Advisory Alcohol:</span> <ul className='list-none flex flex-col gap-2'>{movieData["data"]["advisoryAlcohol"].length>0?movieData["data"]["advisoryViolence"].map(item => <li className='bg-categItemBg p-1 rounded-sm'>{item}</li>):"Sorry, but there is no information available on this category right now"}</ul></p>
          <p className="font-normal bg-categBg p-5 rounded"><span className='font-black text-xl'>Advisory Frightening:</span> <ul className='list-none flex flex-col gap-2'>{movieData["data"]["advisoryFrightening"].length>0?movieData["data"]["advisoryViolence"].map(item => <li className='bg-categItemBg p-1 rounded-sm'>{item}</li>):"Sorry, but there is no information available on this category right now"}</ul></p>
          <p className="font-normal bg-categBg p-5 rounded"><span className='font-black text-xl'>Advisory Nudity:</span> <ul className='list-none flex flex-col gap-2'>{movieData["data"]["advisoryNudity"].length>0?movieData["data"]["advisoryViolence"].map(item => <li className='bg-categItemBg p-1 rounded-sm'>{item}</li>):"Sorry, but there is no information available on this category right now"}</ul></p>
          <p className="font-normal bg-categBg p-5 rounded"><span className='font-black text-xl'>Advisory Profanity:</span> <ul className='list-none flex flex-col gap-2'>{movieData["data"]["advisoryProfanity"].length>0?movieData["data"]["advisoryViolence"].map(item => <li className='bg-categItemBg p-1 rounded-sm'>{item}</li>):"Sorry, but there is no information available on this category right now"}</ul></p>
          <p className="font-normal bg-categBg p-5 rounded"><span className='font-black text-xl'>Advisory Violence:</span> <ul className='list-none flex flex-col gap-2'>{movieData["data"]["advisoryViolence"].length>0?movieData["data"]["advisoryViolence"].map(item => <li className='bg-categItemBg p-1 rounded-sm'>{item}</li>):"Sorry, but there is no information available on this category right now"}</ul></p>
        </div>
        : <div className='flex flex-col items-center mt-5 gap-2'><div className='text-xl font-semibold'>Loading...</div><svg class="icon-loading" height="90" width="90" viewBox="0 0 90 90"><g fill="#526D82" fill-rule="evenodd" transform="translate(1 1)" stroke="#fff" stroke-width="2"><circle cx="45" cy="45" r="12"><animate attributeName="r" begin="1.5s" dur="3s" values="12;45" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="4;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="45" cy="45" r="12"><animate attributeName="r" begin="3s" dur="3s" values="12;45" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="8;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="45" cy="45" r="16"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g></svg></div>}
      </div>
    </div>
  )
}

export default MoviePGPage