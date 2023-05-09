import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext()
export default CartContext

const init = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=>{
    
    const [carrito, setCarrito] = useState(init)
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    // console.log(carrito)
    
    const addToCart = (item) =>{
      const existe = carrito.some((prod)=> prod.id === item.id)
      if(existe){
        carrito.map((prod)=>{
          if(prod.id == item.id){
              prod.counter += item.counter
              setCarrito([...carrito], prod.counter)
              Swal.fire({
                icon: 'success',
                title: `Añadiste ${prod.counter} ${prod.description} al carrito!`,
                showConfirmButton: false,
                timer: 1500
              })
          }
        })
      }else{
        setCarrito([...carrito, item])
        Swal.fire({
          icon: 'success',
          title: `Añadiste ${item.counter} ${item.description} al carrito!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
      console.log(item)

    }
    
    const calcularCantidad = () =>{
      return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = ()=>{
      return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }
    const removerItem = (itemId)=>{
      const existe = carrito.find((prod)=> prod.id === itemId)
      if(existe.counter <= 1){
        const newCart = carrito.filter((prod)=> prod.id !== itemId)
        setCarrito(newCart)
      }else{
        existe.counter--
        setCarrito([...carrito], existe.counter)
      }

    }
    const vaciarCarrito = ()=>{
      setCarrito([])
    }

    return(
        <CartContext.Provider value={{
            addToCart,
            calcularCantidad,
            precioTotal,
            removerItem,
            carrito,
            vaciarCarrito,
        }}>
            {children}
        </CartContext.Provider>

    )
}
