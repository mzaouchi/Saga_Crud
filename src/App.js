import './App.css';
import ListF from './Components/ListF';
import UserDescription from './Components/UserDescription';
import {Routes,Route} from 'react-router-dom'
import NavS from './Components/NavS';
import Home from './Components/Home';
function App() {
  return (
    <div>

      <NavS/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<ListF/>}/>
        <Route path='/Users/:id' element={<UserDescription/>}/>
      </Routes>
    </div>

  );
}

export default App;
