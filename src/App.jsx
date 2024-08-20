import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { ProductDetail } from './Components/ProductDetail/ProductDetail';
import { Blog } from './Components/Blog/Blog';
import { Products } from './Components/Products/Products';
import { BlogDetail } from './Components/BlogDetail/BlogDetail'
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { Contact } from './Components/Contact/Contact';
import { Store } from './Components/Store/Store';
import { Cart } from './Components/Cart/Cart';
import { CartCheckout } from './Components/CartCheckout/CartCheckout';
import ScrollToTop from './Components/Scroll/Scroll';
import { UserAccount } from './Components/UserAccount/UserAccount';
function App() {
  return (
      <>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryId" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cartcheckout" element={<CartCheckout/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/useraccount' element={<UserAccount/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/store' element={<Store/>}/>
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;
