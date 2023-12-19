import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
<Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/History' element={<WatchHistory/>}></Route>
</Routes>
       <Footer/>
    </div>
  );
}

export default App;
