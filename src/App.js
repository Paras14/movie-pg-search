import { useEffect } from 'react';
import './App.css';
import MovieCard from './component/MovieCard';

function App() {

  // const [movieData, setMovieData] = useState([]);
  
  useEffect(() => {
    console.log(process.env.REACT_APP_OMDB_KEY);
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <div className="flex-intial p-5 text-center bg-pink-600">{/*Issue! not displaying for some reason */}
          {/*Issue! not working for gradient, even with the inbuilt colors, check below*/}
          <h1 className='text-3xl font-oswald text-transparent bg-clip-text bg-gradient-to-r from-darkGold to-lightGold'>
            Movie Recommender
          </h1>
          {/* <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Movie
          </h1> */}
          
        </div>
        <div className="flex-intial mx-4 my-4">
          <div class="mb-3">
            <div class="relative mb-4 flex w-1/2 flex-wrap mx-auto">
              <input
                type="search"
                class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />
              <span
                class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3 mx-8 my-6">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        
      </div>
    </div>
  );
}

export default App;
