import './App.css';
import { Route, Routes } from 'react-router';
import { Form } from './componentes/Form';
import { Table } from './componentes/Table';
import  Footer from "./componentes/Footer";
import Header from './componentes/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/Footer' element={Footer}/>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </div>
  );
}

export default App;
