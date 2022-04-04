import './App.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import MyRoutes from './route/MyRoutes';


function App() {

  return (
   <div className='app'>
     
     <Header/>
     <MyRoutes/>
     <Footer/>
    </div>
  );  
}

export default App;
