import React from 'react'
import "../css/MovieCard.css"
function MovieCard ({movie}){


    function onLike(){
        console.log("Clicked")
    }


  return (
    <div className="movie-card">
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}/>
            <div className='movie-overlay'>
                <button className='like-button' onClick={onLike}>
                    Like
                </button>
            </div>
        </div>
        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard