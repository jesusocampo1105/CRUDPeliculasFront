import React from 'react'
import { Route, Routes } from 'react-router';
import { Form } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Footer1 } from './Footer1';
import { Header } from './Header';

const Layout = () => {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Header/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Table' element={<Table/>}/>
      <Route path='/' element={<Footer1/>}/>
      <Route path='*' element={<Form/>}/>

    </Routes>
  </div>
  )
}

export default Layout