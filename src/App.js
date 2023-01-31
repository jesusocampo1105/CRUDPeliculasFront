import './App.css';
import { Route, Routes } from 'react-router';
import { Form } from './componentes/Form';
import { Table } from './componentes/Table';
import { Footer1 } from './componentes/Footer1';
import { Header } from './componentes/Header';




function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Footer1/>
    </div>
  );
}

export default App;
