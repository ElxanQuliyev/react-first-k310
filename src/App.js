import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroSlider from './components/hero-slider/HeroSlider';
import Home from './pages/Home';

function App() {

  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
    );  
}

export default App;
