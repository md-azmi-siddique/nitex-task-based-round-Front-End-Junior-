
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import HeroDesign from './Components/HeroDesign/HeroDesign';
import Product from './Components/Product/Product';


function App() {
  return (
    <div>
    <Header></Header>
    <HeroDesign></HeroDesign>
    <About></About>
    <Product></Product>
    <ContactUs></ContactUs>
    </div>
  );
}

export default App;
