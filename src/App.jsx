import { Routes, Route } from "react-router";
// Components
import Navigation from "./components/Navigation/Navigation";
// Pages / Views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Category from "./views/Category/Category";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
