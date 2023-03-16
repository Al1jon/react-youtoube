import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import SinglePages from './pages/SinglePages.js/SinglePages';
import Channel from './pages/Channel/Channel';
import NotFoundPages from './pages/404Pages/NotFoundPages';
import Login from './pages/Login/Login';
// import { useParams } from 'react-router-dom';
// import { VideoContext } from './components/Card/Card';
import { useState } from 'react';



function App() {
  const [favourits, setFavourits] = useState([]);


  return (
    <div className="App container mx-auto">
      <Header favourits={favourits} />
      <Routes>
        <Route path='/' element={<Home  favourits={favourits} setFavourits={setFavourits} />} />
        <Route path='/singlepages/:id' element={<SinglePages/>} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>

    </div>
  );
}

export default App;









