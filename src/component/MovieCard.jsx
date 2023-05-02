import React from 'react'

function MovieCard(props) {
  return (
    <div className='drop-shadow-md hover:drop-shadow-xl p-[6px] h-[331px] w-[180px] aspect-video border-2 cursor-pointer hover:scale-105 transition duration-600 flex flex-col justify-between' onClick={props.cardHandle}>
        <div className="h-3/5 w-full bg-slate-700 border-1 mb-px border-gray-950"><img src={props.poster} alt="Poster Not Found" srcSet="" /></div>
        <div className="h-1/5 w-full bg-slate-200 border-1 flex flex-col justify-between border-gray-950">
            <p className="text-[14px]">{props.title}</p>
            <div className="flex justify-between">
                <p className="text-gray-400 text-[12px]">{props.year}</p>
                <p className="text-gray-400 text-[12px]">{props.type}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard