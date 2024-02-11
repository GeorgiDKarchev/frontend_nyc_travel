
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AdditionalTours from './pages/AdditionalTours';
import About from './pages/About';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
//import TourDetails
import TourDetails from './components/TourDetails';


function App() {
 return(

  <div >
      <BrowserRouter>
        <NavBar></NavBar>,
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/additional-tours' element={<AdditionalTours/>}></Route>
            <Route path=':/tourId' element={<About/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}
 
export default App;