import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon, StarIcon } from '@heroicons/react/outline';


function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div className="group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">

            <Image className="cursor-pointer" layout='responsive'
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                height={1080} width={1920} />

            <div className="p-3">
                <h1 className="mt-1 text-2xl cursor-pointer  transition-all duration-100 ease-in-out transform hover:scale-y-125 hover:text-white group-hover:font-bold active:text-green-500">
                    {result.title || result.original_name}

                </h1>

                <p className="truncate max-w-md">
                    {result.overview}
                </p>
                <p className="flex items-center opacity-0 group-hover:opacity-100 group-hover:text-yellow-500">Released -
                    {result.media_type && `${result.media_type} .`}{" "}
                    {result.release_date || result.first_air_date} .{" "}
                    <ThumbUpIcon className="mx-2 h-5" />{result.vote_count}
                </p>
                <p className="flex items-center opacity-0 group-hover:opacity-100 space-x-10 group-hover:text-green-500 ">Ratings -
                    <StarIcon className="mx-2 h-5" />{result.vote_average}       Language - {result.original_language}
                </p>
            </div>

        </div>
    );
}

export default Thumbnail
