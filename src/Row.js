import React, { useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'

function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([])
    
useEffect(()=>{

async function fetchData(){
    const request=await axios.get(fetchUrl)
    setMovies(request.data.Search)
    console.log(request.data.Search)
    return request;
}
fetchData()
},[fetchUrl])

    return(
        <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
            {movies.map(movie=>(
    <img 
    key={movie.id}
    className="row_poster"
    src={movie.Poster} alt={movie.Title} />
    ))}
         </div>
       
        </div>


    )
}

export default Row
