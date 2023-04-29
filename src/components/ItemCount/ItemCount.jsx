import React from 'react'

function ItemCount({max, cantidad, modify}) {

  // const [counter, setCounter] = useState(0)

  const sumar= () =>{
    if (cantidad < max){
      modify(cantidad + 1)
    }
  }

  const restar = () =>{
    if(cantidad > 0){
      modify(cantidad - 1)
    }
  }

  // const resetear = () =>{
  //   setCounter(0)
  // }

  return (
    <>
      <h4>Contador: {cantidad}</h4>
      <div>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        {/* <button onClick={resetear}>⏪</button> */}
      </div>
    </>
  )
}

export default ItemCount