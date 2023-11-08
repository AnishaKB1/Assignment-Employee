
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
 <Navbar>
    </Navbar>
    <Routes>
      <Route path ='/' element={<Home/>}></Route>
      <Route path ='/EmployeeForm' element={<EmployeeForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
