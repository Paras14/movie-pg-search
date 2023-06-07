import React from 'react';
import SearchBar from './SearchBar';
import { ReactComponent as UpArrow } from '../assets/up-arrow-scribble.svg';
import { ReactComponent as SmilingFace } from '../assets/smiling face.svg'

function Home() {
  return (
    <div className='flex flex-col h-screen'>
        <SearchBar />
        <div className="lg:h-1/2 md:h-1/2 sm:h-1/2 h-1/6 flex items-center justify-center">
          <UpArrow className='lg:h-48 lg:w-48 md:h-36 md:w-36 sm:h-36 sm:w-36 w-36 h-36'/>
        </div>
        <div className='flex items-center justify-center h-1/2'>
          <div className="text-5xl text-gray-400 p-10 font-pacifico">Search from here<SmilingFace className='w-16 h-16 inline'/></div>
        </div>
    </div>
  )
}

export default Home