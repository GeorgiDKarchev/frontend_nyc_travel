
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AdditionalTours from './pages/AdditionalTours';
import About from './pages/About';

function App() {
  return (
    <div >
     
      <BrowserRouter>
        <NavBar></NavBar>,
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/additional-tours' element={<AdditionalTours/>}></Route>
            <Route path=':/tourId' element={<AdditionalTours/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;