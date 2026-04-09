import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import Footer from './landing_page/Footer';
import ProductPage from './landing_page/products/ProductsPage';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import SupportPage from './landing_page/support/SupportPage';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}