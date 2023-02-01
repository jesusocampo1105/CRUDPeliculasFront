import './App.css';
import { Route, Routes } from 'react-router';
import { Form } from './componentes/Form';
import { Table } from './componentes/Table';
import { Footer } from './componentes/Footer';
import { Header } from './componentes/Header';




function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
