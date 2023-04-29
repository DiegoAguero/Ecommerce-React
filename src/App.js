import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount'
import Pika from './components/Pika/Pika';
import Home from './components/Home/Home';
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

function App() {
  // const [carrito, setCarrito] = useState([])
  // console.log(carrito)

  // const addToCart = (item) =>{
  //   setCarrito([...carrito, item])
  //   console.log(addToCart)
  // }
  
  // const calcularCantidad = () =>{
  //   return carrito.reduce((acc, prod) => acc + prod.counter, 0)
  // }
  // const precioTotal = ()=>{
  //   return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
  // }
  // const removerItem = (itemId)=>{
  //   const newCart = carrito.filter((prod)=> prod.id !== itemId)
  //   setCarrito(newCart)
  // }
  // const vaciarCarrito = ()=>{
  //   setCarrito([])
  // }
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ItemListContainer/>}/>
            <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cartscreen' element={<CartScreen/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            {/* <Route path='/pika' element={<Pika/>}/> */}
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </CartProvider>
  );
}
export default App;
