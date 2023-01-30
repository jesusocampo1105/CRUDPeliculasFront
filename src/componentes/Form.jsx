import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Form = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        // evita que se recargue la pagina y se pierdan los valores ingresados
        e.preventDefault();
        setInput('');
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: e.target.title.value,
            year: e.target.year.value,
            time: e.target.time.value,
            lang: e.target.lang.value,
            date: e.target.date.value,
            country: e.target.country.value,
        });

        console.log(e.target.year.value, e.target.title.value )

        // const title = e.target.title.value;
        // const year = e.target.year.value;
    }

  return (
    <div>
        {/* Para obtener los datos y posteriormente enviarlos al servidor utilizamos onSubmit, capturando el evento de envío */}
        <form className='movie-form' 
            onSubmit={handleSubmit}
        >

            <h2>Inserte los datos correspondientes de la película a agregar:</h2>
            <div>
                <label>Id de la pelicula </label>
                <input 
                    name='id'
                    className='mov-id'
                    
                />
            </div>
            <div>
                <label>Título de la pelicula </label>
                <input 
                    name='title'
                    className='mov-tit'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Año de la pelicula </label>
                <input 
                    name='year'
                    className='mov-year'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Tiempo de la pelicula </label>
                <input 
                    name='time'
                    className='mov-time'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Lenguaje de la pelicula </label>
                <input 
                    name='lang'
                    className='mov-lang'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>País de la pelicula </label>
                <input 
                    name='country'
                    className='mov-country'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Fecha de Lanzamiento </label>
                <input 
                    name='date'
                    className='mov-date'
                    onChange={handleChange}
                />
            </div>
            <div>
                <button className='add-btn'>Agregar</button>
            </div>

        </form>

        <button><Link to='/Table'>VER TABLA</Link></button>
    </div>
  )
}
