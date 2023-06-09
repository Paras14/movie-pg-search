import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const searchHandle = () => {
        navigate(`/search?q=${search}`);
    }
    return (
        <div className="flex flex-col">
            <div className="flex-intial p-3 text-center bg-brownLogoBgAlt1">
            <h1 className='inline-block lg:text-5xl md:text-5xl sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-darkGold to-lightGold font-abrilFatface'>
                <Link to='/'>Movies Parental Guide</Link>
            </h1>
            </div>
            <div className="flex-intial mx-4 my-4">
            <div class="mb-3">
                <form class="relative mb-4 flex lg:w-1/2 md:w-1/2 sm:w-1/2 w-5/6 flex-wrap mx-auto" onSubmit={searchHandle}>
                <input
                    type="search"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    onChange={(e) => setSearch(e.target.value)} />
                <button
                    class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2" onClick={searchHandle}>
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
                </button>
                </form>
            </div>
            </div>
            {/* <SearchPage movieData={movieData}/> */}
        </div>
    )
}

export default SearchBar