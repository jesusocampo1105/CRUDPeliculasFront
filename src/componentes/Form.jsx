import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Form = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        
        console.log(input)
    }

    const handleSubmit = e => {
        // evita que se recargue la pagina y se pierdan los valores ingresados
        e.preventDefault();
        let x = {
            id: Math.floor(Math.random() * 10000),
            title: e.target.title.value,
            year: e.target.year.value,
            time: e.target.time.value,
            lang: e.target.lang.value,
            date: e.target.date.value,
            country: e.target.country.value,
        }
        console.log(x)
        props.onSubmit(x);
        e.target.title.value = ''
        e.target.year.value = ''
        e.target.time.value = ''
        e.target.lang.value = ''
        e.target.date.value = ''
        e.target.country.value = ''
        setInput('');
        
        
    }

  return (
    
    <div>
        {/* Para obtener los datos y posteriormente enviarlos al servidor utilizamos onSubmit, capturando el evento de envío */}
        <form id='formulario' className='movie-form' name='formulario'
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
                    required
                />
            </div>
            <div>
                <label>Fecha de Lanzamiento </label>
                <input 
                    name='date'
                    className='mov-date'
                    onChange={handleChange}
                    required
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
