import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import MyWork from './component/MyWork/MyWork';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';


function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>

      
    </div>

  );
}

export default App