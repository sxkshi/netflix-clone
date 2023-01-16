import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./Row.css";

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //a snippet of code that runs based on a specific condition/variable
    useEffect(() => {
        //if [], then run once when the row loads, and then dont run it again
        async function fetchData() {
            const request = await axios.get(fetchURL); //https://api.themovie.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            setMovies(request.data.results)
            return request;            
        }
        fetchData();
    }, [fetchURL]);

    console.table(movies);


  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {/*several row posters*/}

            {movies.map(movies => (
                <img 
                key={movies.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} 
                alt={movies.name} 
                />
            ))}

        </div>

    </div>
  )
}

export default Row