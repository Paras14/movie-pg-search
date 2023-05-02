import React from 'react'

function MovieCard(props) {
  return (
    <div className='p-[6px] h-[331px] w-[180px] aspect-video border-2'>
        <div className="h-[243px] w-full bg-slate-700 border-3 mb-px"><img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="" srcset="" /></div>
        <div className="h-[72px] w-full bg-slate-200 border-3">
            <p className="text-[14px]">Guardians of the Galaxy Vol. 2</p>
            <div className="flex justify-between">
                <p className="text-gray-400 text-[12px]">2017</p>
                <p className="text-gray-400 text-[12px]">136 min</p>
            </div>
            <p className="text-gray-400 text-[12px]">Action, Adventure, Comedy</p>
        </div>
    </div>
  )
}

export default MovieCard