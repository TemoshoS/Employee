import Home from './Components/Home';
import './App.css';
import Newemployee from './Components/Newemployee';
import Update from './Components/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './Components/View'


function App() {


  return (
    <div className="App">
    

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employee/create' element={<Newemployee/>} />
          <Route path='/employee/edit/:empid' element={<Update/>}/>
          <Route path='/employee/view/:empid' element={<View/>}/>
          
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
