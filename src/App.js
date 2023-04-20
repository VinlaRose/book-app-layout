import { Route, Routes, NavLink } from 'react-router-dom';
import { useContext } from "react"

import { BookContext } from "./context/BookContext"
import './others/App.css';
import { Home } from './pages/Home';
import { Favourite } from './pages/Favourite';
import { Read } from './pages/Read';
import { Profile } from './pages/Profile';

function App() {
  const {favouriteLength, readLength} = useContext(BookContext);
  return (
    <div className="App">
     <h1>Books App</h1>

     <nav>
      <NavLink style={{margin : "10px"}} to="/" >All Books</NavLink>
      <NavLink style={{margin : "10px"}} to="/favourites" >Favourites({favouriteLength})</NavLink>
      <NavLink style={{margin : "10px"}} to="/read" >Read({readLength})</NavLink>
      <NavLink style={{margin : "10px"}} to="/profile" >Profile</NavLink>
     </nav>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favourites" element={<Favourite/>} />
      <Route path="/read" element={<Read/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </div>




  );
}

export default App;
