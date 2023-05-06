import { createContext, useEffect, useState } from "react";

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
      
      //Itero sobre el carrito
      //Si el elemento esta en el carrito
        //Sumo 1 a ese elemento en el carrito
        //Y mando setCarrito sin item
      //Si no
        //Agrego el item al carrito
      const existe = carrito.some((prod)=> prod.id === item.id)
      if(existe){
        carrito.map((prod)=>{
          if(prod.id == item.id){
              prod.counter++
              setCarrito(carrito)
          }
        })
      }else{
        setCarrito([...carrito, item])
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
      const existe = carrito.some((prod)=> prod.id === itemId)
      if(existe){
        const prod = carrito.map(prod =>{
          if(prod.id === itemId){
            if(prod.counter <= 1){
              const newCart = carrito.filter((prod)=> prod.id !== itemId)
              setCarrito(newCart)
            }else{
              //Solucionar error de que no se actualiza en la pagina
              prod.counter--
              setCarrito(carrito)
            }
            console.log(prod.counter)
          }
        })
      }else{
        const newCart = carrito.filter((prod)=> prod.id !== itemId)
        setCarrito(newCart)
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
