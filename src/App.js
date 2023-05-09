import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import {CartProvider} from './components/context/CartContext';
import CartScreen from './components/CartScreen/CartScreen';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import OrderDetailContainer from './components/OrderDetailContainer/OrderDetailContainer';

function App() {

  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cartscreen' element={<CartScreen/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/orders' element={<OrderDetailContainer/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </CartProvider>
  );
}
export default App;
