import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {Form} from './Form'
import { Movie } from './Movie';

export const Table = () => {
    const [movies, setMovies] = useState ([]);

    const addMovie = movie => {

        const newMovies = [movie, ...movies];

        setMovies(newMovies);
    }


    const updateMovie = (movieId, newValue) =>{
        if(!newValue.id || /^\s*$/.test(newValue.title)) {
            return;
        }

        setMovies(prev => prev.map(item => (item.id === movieId ? newValue : item)))
    }

    const removeMovie = id => {
        const removeArr = [...movies].filter(movie => movie.id !== id)
        setMovies(removeArr)
    }


  return (
    <div className='table-cont'>
        <Form onSubmit={addMovie}></Form>
        <Movie movies={movies} removeMovie={removeMovie} updateMovie = {updateMovie}></Movie>
    </div>
  )
}
