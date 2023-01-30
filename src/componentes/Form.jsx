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
            title: input
        });
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
                    value={input}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Año de la pelicula </label>
                <input 
                    name='year'
                    className='mov-year'
                />
            </div>
            <div>
                <label>Tiempo de la pelicula </label>
                <input 
                    name='time'
                    className='mov-time'
                />
            </div>
            <div>
                <label>Lenguaje de la pelicula </label>
                <input 
                    name='lang'
                    className='mov-lang'
                />
            </div>
            <div>
                <label>País de la pelicula </label>
                <input 
                    name='country'
                    className='mov-country'
                />
            </div>
            <div>
                <label>Fecha de Lanzamiento </label>
                <input 
                    name='date'
                    className='mov-date'
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
