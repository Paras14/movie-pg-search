import React from 'react'
import posterPlaceHolder from '../assets/poster-holder.jpg'

function MovieCard(props) {
  const cardComponentStyle = {
    backgroundImage: `url(${props.poster==="N/A" ? posterPlaceHolder : props.poster})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

  return (
    <div className='drop-shadow-md hover:drop-shadow-xl 
    md:p-[6px] md:h-[331px] md:w-[180px] 
    lg:p-[6px] lg:h-[331px] lg:w-[180px] 
    sm:p-[6px] sm:h-[331px] sm:w-[180px] 
    p-[6px] h-[440px] w-[240px] 
    aspect-video border-2 cursor-pointer hover:scale-105 transition duration-600 flex flex-col justify-between mx-auto' onClick={props.cardHandle}>
        <div className="h-72 w-full bg-slate-700 border-1 mb-px border-gray-950" style={cardComponentStyle}></div>
        <div className="h-20 w-full bg-slate-200 border-1 flex flex-col justify-between border-gray-950">
            <p className="text-[20px] md:text-[14px] lg:text-[14px] sm:text-[14px]">{props.title}</p>
            <div className="flex justify-between">
                <p className="text-gray-600 text-[18px] md:text-[12px] lg:text-[12px] sm:text-[12px]">{props.year}</p>
                <p className="text-gray-400 text-[18px] md:text-[12px] lg:text-[12px] sm:text-[12px]">{props.type}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard