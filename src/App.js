import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allstories from './Pages/Allstories';
import Create from './Pages/Create';
import Dashboard from './Pages/Dashboard';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Stories from './Pages/Stories';
import Story from './Pages/Story.jsx';
import Useauth from './Authen/Useauth.jsx';


function App() {
  return (

    <div >
          
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route element={<Useauth/>}> 
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Create" element={<Create/>} />
      <Route path="/Edit/:id" element={<Edit/>} />
      <Route path="/Stories" element={<Stories/>} />
      <Route path="/Allstories" element={<Allstories/>} />
      <Route path="/Story/:id" element={<Story/>} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
