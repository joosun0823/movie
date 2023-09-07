import './App.scss';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './comp/Home';
import Movies from './comp/Movies';
import TVseries from './comp/TVseries';
import Detail from './comp/Detail';
import SubDetail from './comp/SubDetail';



function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/tv">TV</Link>
        {/* <Link to="/tv/123123">Detail</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/tv" element={<TVseries/>} />
        <Route path="/:media/:cat/:id" element={<Detail/>} />
        <Route path="/subdetail/:id" element={<SubDetail/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
