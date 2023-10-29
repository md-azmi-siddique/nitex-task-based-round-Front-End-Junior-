
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import HeroDesign from './Components/HeroDesign/HeroDesign';
import Product from './Components/Product/Product';
import Service from './Components/Service/Service';


function App() {
  return (
    <div>
    <Header></Header>
    <HeroDesign></HeroDesign>
    <About></About>
    <Product></Product>
    <Service></Service>
    <ContactUs></ContactUs>
    </div>
  );
}

export default App;
