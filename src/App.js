import Home from './Components/Home';
import './App.css';
import Newemployee from './Components/Newemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Employess</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employee/create' element={<Newemployee/>} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
