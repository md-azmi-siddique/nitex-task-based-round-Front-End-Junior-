import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Error404 from "./Components/Error404/Error404";
import Header from "./Components/Header/Header";
import HeroDesign from "./Components/HeroDesign/HeroDesign";
import Product from "./Components/Product/Product";
import Service from "./Components/Service/Service";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header></Header>
              <HeroDesign></HeroDesign>
              <About></About>
              <Product></Product>
              <Service></Service>
              <ContactUs></ContactUs>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header></Header>
              <About></About>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header></Header>
              <Service></Service>
            </>
          }
        />
        <Route path="/contact" element={
          <>
          <Header></Header>
          <ContactUs></ContactUs>
          </>
        } />
        <Route path="*" element={<Error404></Error404>} />
      </Routes>
    </Router>
  );
}

export default App;
