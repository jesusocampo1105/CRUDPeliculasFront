import React, { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
let url = "http://localhost:3030";

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
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    //Actualizar elementos

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Tiempo</th>
                        <th>Lenguaje</th>
                        <th>País</th>
                        <th>Fecha Lanzamiento</th>
                    </tr>
                </thead>
                {
                    listMovies.map(movie => (
                        <tbody>
                            <tr>
                                <td>{movie.id}</td>
                                <td>{movie.titulo}</td>
                                <td>{movie.ano}</td>
                                <td>{movie.tiempo}</td>
                                <td>{movie.lenguaje}</td>
                                <td>{movie.pais}</td>
                                <td>{movie.fechalanzamiento}</td>
                                <th scope="row">
                                    <div className='edit'><AiFillEdit /></div>
                                </th>
                                    <th scope="row">
                                <div className='trash' onClick={()=> {deleteMovie(movie._id)}}><BsFillTrashFill /></div>
                                 </th>
                            </tr>
                        </tbody>
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
                            <th scope="col">Título</th>
                            <th scope="col">Año</th>
                            <th scope="col">Tiempo</th>
                            <th scope="col">Lenguaje</th>
                            <th scope="col">País</th>
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
