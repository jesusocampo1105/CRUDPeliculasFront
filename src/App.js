import './App.css';
import { Route, Routes } from 'react-router';
import { Form } from './componentes/Form';
import { Table } from './componentes/Table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Table/>}/>
      </Routes>
    </div>
  );
}

export default App;
