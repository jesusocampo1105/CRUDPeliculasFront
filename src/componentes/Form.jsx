import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

let url = "http://localhost:3000";


export const Form = () => {

    const [id, setId] = useState('');    
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [time, setTime] = useState('');
    const [lang, setLang] = useState('');
    const [date, setDate] = useState('');
    const [country, setCountry] = useState('');
    
    /*
    const handleChange = e => {
        setInput(e.target.value);
    }

    /*const handleSubmit = e => {
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
    }*/

    //Add Movie

    const addMovie = async (e) =>{
        e.preventDefault();
            setId('');
            setTitle('');
            setYear('');
            setTime('');
            setLang('');
            setDate('');
            setCountry('');
        try {
            const res = await axios.post(url+'/new/pelicula', {id: id, titulo: title, ano: year, tiempo: time, lenguaje: lang, fechalanzamiento: date, pais: country});
            //setListMovies(prev =>[...prev, res.data]);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    
    <div>
        {/* Para obtener los datos y posteriormente enviarlos al servidor utilizamos onSubmit, capturando el evento de envío */}
        <form className='movie-form' onSubmit={addMovie}>

            <h2>Inserte los datos correspondientes de la película a agregar:</h2>
            <div>
                <label>Id de la pelicula </label>
                <input name='id' className='mov-id' onChange={e =>{setId(e.target.value)}} value={id} required/>
            </div>
            <div>
                <label>Título de la pelicula </label>
                <input name='title' className='mov-tit' onChange={e=>{setTitle(e.target.value)}} value={title} required/>
            </div>
            <div>
                <label>Año de la pelicula </label>
                <input name='year' className='mov-year' onChange={e=>{setYear(e.target.value)}} value={year} required />
            </div>
            <div>
                <label>Tiempo de la pelicula </label>
                <input name='time' className='mov-time'onChange={e=>{setTime(e.target.value)}} value={time} required />
            </div>
            <div>
                <label>Lenguaje de la pelicula </label>
                <input name='lang' className='mov-lang' onChange={e=>{setLang(e.target.value)}} value={lang} required />
            </div>
            <div>
                <label>País de la pelicula </label>
                <input name='country' className='mov-country' onChange={e=>{setCountry(e.target.value)}} value={country} required/>
            </div>
            <div>
                <label>Fecha de Lanzamiento </label>
                <input name='date' className='mov-date' onChange={e=>{setDate(e.target.value)}} value={date}/>
            </div>
            <div>
                <button type='submit' className='add-btn'>Agregar</button>
            </div>

        </form>
    </div>
  )
}
