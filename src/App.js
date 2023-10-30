import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import ContactUs from "./Components/ContactUs/ContactUs";
import Error404 from "./Components/Error404/Error404";
import Events from "./Components/Events/Events";
import Header from "./Components/Header/Header";
import HeroDesign from "./Components/HeroDesign/HeroDesign";
import Product from "./Components/Product/Product";
import Review from "./Components/Review/Review";
import Service from "./Components/Service/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              <Review></Review>

              <Blog></Blog>
              <Events></Events>
              <ContactUs></ContactUs>
            </div>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <div>
              <Header></Header>
              <Product></Product>
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
              <ContactUs></ContactUs>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header></Header>
              <Service></Service>
              <ContactUs></ContactUs>
            </>
          }
        />
        <Route
          path="/reviews"
          element={
            <>
              <Header></Header>
              <Review></Review>
              <ContactUs></ContactUs>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header></Header>
              <ContactUs></ContactUs>
            </>
          }
        />
        <Route path="*" element={<Error404></Error404>} />
      </Routes>
    </Router>
  );
}

export default App;
