import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import MovieVideo from './pages/MovieVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
        <Route path="/Movie/:id" element={<MovieVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
