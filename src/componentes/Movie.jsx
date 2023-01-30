import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit} from "react-icons/ai";

export const Movie = ({movies, removeMovie, updateMovie}) => {
    const [edit, setEdit] = useState({
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
    }
    
  return (
  movies.map((movie, index) =>(
    <div key={index}>  
        <table summary="">
            
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Año</th>
                    <th scope="col">Tiempo</th>
                    <th scope="col">Lenguaje</th>
                    <th scope="col">Fecha Lanzamiento</th>
                    <th scope="col">País</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{movie.id}</th>
                    <td key={movie.id}>{movie.title}</td>
                    <td>2019</td>
                    <td>2h47min</td>
                    <td>español</td>
                    <td>22-10-2015</td>
                    <td>Nunca jamas</td>
                <th classname= 'lastrow' scope="row">
                    <div className='edit' onClick={() => setEdit({id: movie.id, value: movie.title})}><AiFillEdit/></div>
                </th>
                <th classname= 'lastrow' scope="row">
                    <div className='trash' onClick={() => removeMovie(movie.id)}><BsFillTrashFill/></div>
                </th>
                </tr>
            </tbody>

        </table>

    </div>
  
  ))
  )
}
