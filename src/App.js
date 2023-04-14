import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import ProductSinglePage from './pages/ProductSinglePage';
import CategoryProductPage from './pages/CategoryProductPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<NotFound />}/>
            <Route path="/product/:id" element={<ProductSinglePage />} />
            <Route path="/category/:category" element={<CategoryProductPage />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;