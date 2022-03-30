import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Header from './Components/Header.js';
import HeaderDown from './Components/HeaderDown';
import ProductDisplay from './Components/ProductDisplay';
import Pagination from './Components/Pagination';
import Main from './Components/Main';
import Login from './Components/Login';


function App() {
  return (
    <div>
    <Router>
     <Routes>
       <Route path='/' element={<Main/>}/>
       <Route path='/cart' element={<Login/>}/>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
