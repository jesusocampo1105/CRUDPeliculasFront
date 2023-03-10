import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
let url = "https://crud-peliculas-back.vercel.app";

export const Movie = () => {
    /*const [edit, setEdit] = useState({
        id: null,
        value:''
    })

    const submitUpdate = value => {
        updateMovie(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate}/>
    }*/

    const [listMovies, setListMovies] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateId, setUpdateId] = useState('');    
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateYear, setUpdateYear] = useState('');
    const [updateTime, setUpdateTime] = useState('');
    const [updateLang, setUpdateLang] = useState('');
    const [updateDate, setUpdateDate] = useState('');
    const [updateCountry, setUpdateCountry] = useState('');

    //Mostrar elementos
    useEffect(() => {
        const getMovieList = async () => {
            try {
                const res = await axios.get(url + '/get/pelicula');
                setListMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieList();
    }, []);

    //Eliminar elementos
    const deleteMovie = async (id) =>{
        try {
            const res = await axios.delete(url+`/new/pelicula/${id}`);
            const newListMovies = listMovies.filter(mov => mov._id !== id);
            setListMovies(newListMovies);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    //Actualizar elementos
    const updateMovie = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.put(url+`/new/pelicula/${isUpdating}`, {id: updateId, titulo: updateTitle, ano: updateYear, tiempo: updateTime, lenguaje: updateLang, 
        fechalanzamiento: updateDate, pais: updateCountry});
            console.log(res.data);
            const updateMovieIndex = listMovies.findIndex(movie => movie._id ===isUpdating);
            const updatedIdMovie = listMovies[updateMovieIndex].id= updateId;            
            const updatedTitleMovie = listMovies[updateMovieIndex].titulo= updateTitle;
            const updatedYearMovie = listMovies[updateMovieIndex].ano= updateYear;
            const updatedTimeMovie = listMovies[updateMovieIndex].tiempo= updateTime;
            const updatedLangMovie = listMovies[updateMovieIndex].lenguaje= updateLang;
            const updatedCountryMovie = listMovies[updateMovieIndex].pais= updateCountry;
            const updatedDateMovie = listMovies[updateMovieIndex].fechalanzamiento= updateDate;  
            
            setUpdateId('');
            setIsUpdating('');
        } catch (error) {
            
        }

    }

    //Renderizar elementos a modificar
    const renderUpdateMovie = () =>(
        <div  className='prueba'>
            <form onSubmit={(e)=>{updateMovie(e)}}>
                <input type="text" placeholder="N-Id" onChange={e=>{setUpdateId(e.target.value)}} value={updateId}/>
                <input type="text" placeholder="N-T??tulo" onChange={e=>{setUpdateTitle(e.target.value)}} value={updateTitle}/>
                <input type="text" placeholder="N-A??o" onChange={e=>{setUpdateYear(e.target.value)}} value={updateYear}/>
                <input type="text" placeholder="N-Tiempo" onChange={e=>{setUpdateTime(e.target.value)}} value={updateTime}/>
                <input type="text" placeholder="N-Lenguaje" onChange={e=>{setUpdateLang(e.target.value)}} value={updateLang}/>
                <input type="text" placeholder="N-Pa??s" onChange={e=>{setUpdateCountry(e.target.value)}} value={updateCountry}/>
                <input type="text" placeholder="N-Fecha" onChange={e=>{setUpdateDate(e.target.value)}} value={updateDate}/>
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    )

    return (
        <div className='movies-table-cont'>
            <h2>Pel??culas agregadas</h2>
            <table className='movies-table' >
                
                <thead>
                    <tr>
                        <th>id</th>
                        <th>T??tulo</th>
                        <th>A??o</th>
                        <th>Tiempo</th>
                        <th>Lenguaje</th>
                        <th>Pa??s</th>
                        <th>Fecha Lanzamiento</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    listMovies.map(movie => (
                        <tbody>{
                                isUpdating === movie._id
                                ? renderUpdateMovie()
                                :
                            <tr>                                                                
                                <td>{movie.id}</td>
                                <td>{movie.titulo}</td>
                                <td>{movie.ano}</td>
                                <td>{movie.tiempo}</td>
                                <td>{movie.lenguaje}</td>
                                <td>{movie.pais}</td>
                                <td>{movie.fechalanzamiento}</td>
                                <th scope="row">
                                    <div className='edit' onClick={()=>{setIsUpdating(movie._id)}}><AiFillEdit className='edit-i'/></div>
                                </th>
                                    <th scope="row">
                                <div className='trash' onClick={()=> {deleteMovie(movie._id)}}><BsFillTrashFill className='trash-i'/></div>
                                 </th>                                
                            </tr>
                        }</tbody>
                    ))
                }
            </table>

        </div>
        /*movies.map((movie, index) => (
            <div key={index}>
                <table summary="">

                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">T??tulo</th>
                            <th scope="col">A??o</th>
                            <th scope="col">Tiempo</th>
                            <th scope="col">Lenguaje</th>
                            <th scope="col">Pa??s</th>
                            <th scope="col">Fecha Lanzamiento</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{movie.id}</th>
                            <td key={movie.id}>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>{movie.time}</td>
                            <td>{movie.lang}</td>
                            <td>{movie.country}</td>
                            <td>{movie.date}</td>
                            <th scope="row">
                                <div className='edit' onClick={() => setEdit({ id: movie.id, value: movie.title })}><AiFillEdit /></div>
                            </th>
                            <th scope="row">
                                <div className='trash' onClick={() => removeMovie(movie.id)}><BsFillTrashFill /></div>
                            </th>
                        </tr>
                    </tbody>

                </table>

            </div>

        ))*/
    )
}
